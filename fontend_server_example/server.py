# -*- coding: utf-8 -*-
# 导入一些网站包
from flask import Flask,jsonify,render_template,request,redirect,url_for,Response
import json
# 导入一些机器学习包
# import pandas as pd
import numpy as np
from sklearn.model_selection import cross_val_score
from sklearn.tree import DecisionTreeClassifier
from sklearn import tree
from sklearn.tree import _tree
from sklearn.metrics import accuracy_score
import math
from flask_cors import CORS
import copy

import configparser
import os
import sys

from openai import OpenAI

client = OpenAI(
    # defaults to os.environ.get("OPENAI_API_KEY")
    api_key='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',
)



app = Flask(__name__)
# CORS(app, resources=r'/*')

delimiter = "####"


model_name = "gpt-4-1106-preview"

message_content = '''Task: For the given programming problem, help me work out as many solutions as possible and return the intended result.
Instruction:Please ONLY RETURN the result in this JSON format:{'solution1':{'solution_name':'','solution_logic':'','algorithm_used':'the algorithm used in the solution','data_structure_used':'the data structure used in the solution','solution_codes':'this code should be in a good format with easy-to-read indent'},'solution2':{...}}
Programming problem:Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
'''

@app.route('/generate_idea', methods = ['GET', 'POST'])
def generate_idea():
      
    print('Request got!')
    try:
        completion = client.chat.completions.create(
            model=model_name,
            messages=[{"role": "user", "content": message_content}],
            response_format={"type": "json_object"}
        )
        content = completion.choices[0].message.content.strip()
    except Exception as e:
        print(e)
        return "ChatGPT error"

    print('=====================To send back=========================')
    print(content)


    to_json = json.dumps(content)
    print(to_json)
    resp = Response(to_json)

    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST'
    return resp





if __name__ == '__main__':
    

    app.run(host='0.0.0.0', port=8088, debug=True)

