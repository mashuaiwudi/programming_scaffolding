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





@app.route('/generate_idea', methods = ['GET', 'POST'])
def generate_idea():
      
    print('Request got!')
    problem = ''

    if request == None or request == '':
        print('The received data is null or empty.')
    else:
        problem = request.args.get('problem')

    generate_idea_prompt = '''Task: For the given programming problem, help me work out as many solutions as possible and return the intended result.
    Instruction:Please ONLY RETURN the result in this JSON format:{'solution1':{'solution_name':'','solution_logic':'','algorithm_used':'the algorithm used in the solution','data_structure_used':'the data structure used in the solution','time_complexity':'','space_complexity':'', 'solution_codes':'this code should be in a good format with easy-to-read indent'},'solution2':{...}}. Note that for time_complexity and space_complexity, only return the results do not return the reasons.
    Programming problem:''' + problem + '''

    You may assume that each input would have exactly one solution, and you may not use the same element twice.

    You can return the answer in any order.
    '''
    try:

        completion = client.chat.completions.create(
            model=model_name,
            messages=[{"role": "user", "content": generate_idea_prompt}],
            response_format={"type": "json_object"}
        )
        content = completion.choices[0].message.content.strip()
    except Exception as e:
        print(e)
        return "ChatGPT error"

    print('=====================To send back=========================')
    print(content)


    # to_json = json.dumps(content)
    # print(to_json)
    resp = Response(content)

    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST'
    return resp





@app.route('/generate_step', methods = ['GET', 'POST'])
def generate_step():
      
    print('Request got!')
    problem = ''

    if request == None or request == '':
        print('The received data is null or empty.')
    else:
        problem = request.args.get('problem')

    generate_step_prompt = '''Task: Given the programming problem solutions, please divide each solution into several key steps, and generate two incorrect/misleading steps. 
    Instructions: ONLY RETURN the result in this JSON format: {'solution1':{'key_steps':'['step1','step2','step3',...]','incorrect_steps':['step1','step2']},'solution2':{...}}
    Given solutions: {
        "solution1": {
            "solution_name": "Brute Force",
            "solution_logic": "Check each pair of numbers and see if they sum up to the target.",
            "algorithm_used": "Brute force",
            "data_structure_used": "Array",
            "time_complexity": "O(n^2)",
            "space_complexity": "O(1)",
            "solution_codes": "def twoSum(nums, target):\n    for i in range(len(nums)):\n        for j in range(i+1, len(nums)):\n            if nums[i] + nums[j] == target:\n                return [i, j]"
        },
        "solution2": {
            "solution_name": "Hash Table",
            "solution_logic": "Use a hash table to track the complement of each element and check if it's already in the table while iterating through the array.",
            "algorithm_used": "Hashing",
            "data_structure_used": "Hash Table (Dictionary in Python)",
            "time_complexity": "O(n)",
            "space_complexity": "O(n)",
            "solution_codes": "def twoSum(nums, target):\n    prevMap = {}\n    for i, n in enumerate(nums):\n        diff = target - n\n        if diff in prevMap:\n            return [prevMap[diff], i]\n        prevMap[n] = i"
        },
        "solution3": {
            "solution_name": "Sort and Two Pointer",
            "solution_logic": "Sort the array and use two pointers to find the two numbers.",
            "algorithm_used": "Two Pointer",
            "data_structure_used": "Array",
            "time_complexity": "O(n log n)",
            "space_complexity": "O(1)",
            "solution_codes": "def twoSum(nums, target):\n    nums = enumerate(nums)\n    nums = sorted(nums, key=lambda x:x[1])\n    left, right = 0, len(nums) - 1\n    while left < right:\n        if nums[left][1] + nums[right][1] == target:\n            return [nums[left][0], nums[right][0]]\n        elif nums[left][1] + nums[right][1] < target:\n            left += 1\n        else:\n            right -= 1"
        }
    }
    '''

    try:

        completion = client.chat.completions.create(
            model=model_name,
            messages=[{"role": "user", "content": generate_step_prompt}],
            response_format={"type": "json_object"}
        )
        content = completion.choices[0].message.content.strip()
    except Exception as e:
        print(e)
        return "ChatGPT error"

    print('=====================To send back=========================')
    print(content)


    # to_json = json.dumps(content)
    # print(to_json)
    resp = Response(content)

    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST'
    return resp




@app.route('/inputoutput', methods = ['GET', 'POST'])
def input_output():
      
    print('Request got!')

    input = ''
    problem = ''

    if request == None or request == '':
        print('The received data is null or empty.')
    else:
        input = request.args.get('input')
        problem = request.args.get('problem')


    input_output_prompt = '''Task: Given the programming problem, the INPUT of the progaram, please tell me the OUTPUT.
    Instructions: First, you need to check whether the INPUT is the correct format of the input, if the INPUT format is incorrect, return False. Otherwise
    , if INPUT format is correct, return the OUTPUT and the explanation as a JSON object:{'output':'','explanation':'the explanation of correctness judgement'}. Finally, please carefully check it again.
    Given INPUT:''' + input + '''
    Given programming problem:''' + problem

    try:
        completion = client.chat.completions.create(
            model=model_name,
            messages=[{"role": "user", "content": input_output_prompt}],
            response_format={"type": "json_object"}
        )
        content = completion.choices[0].message.content.strip()
    except Exception as e:
        print(e)
        return "ChatGPT error"

    print('=====================To send back=========================')
    print(content)


    # to_json = json.dumps(content)
    # print(to_json)
    resp = Response(content)

    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST'
    return resp







@app.route('/checkoutput', methods = ['GET', 'POST'])
def checkoutput():
      
    print('Request got!')

    input = ''
    output = ''
    problem = ''

    if request == None or request == '':
        print('The received data is null or empty.')
    else:
        input = request.args.get('input')
        output = request.args.get('output')
        problem = request.args.get('problem')


    checkoutput_prompt = '''Task: Given the programming problem, the INPUT of the progaram and the OUTPUT of the program, please judge is the OUTPUT correct?
    Instructions: First, you need to check whether the INPUT is the correct format of the input, if the INPUT format is incorrect, return False. Otherwise
    , if INPUT format is correct, then return whether the OUTPUT is correct and the explanation as a JSON object:{'correctness':'1 for correct output and 0 for incorrect output','explanation':'the explanation of correctness judgement'}. Finally, please carefully check it again.
    Given INPUT:''' + input + '''
    Given OUTPUT:''' + output + '''
    Given programming problem:''' + problem

    try:
        completion = client.chat.completions.create(
            model=model_name,
            messages=[{"role": "user", "content": checkoutput_prompt}],
            response_format={"type": "json_object"}
        )
        content = completion.choices[0].message.content.strip()
    except Exception as e:
        print(e)
        return "ChatGPT error"

    print('=====================To send back=========================')
    print(content)


    # to_json = json.dumps(content)
    # print(to_json)
    resp = Response(content)

    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST'
    return resp





if __name__ == '__main__':
    

    app.run(host='0.0.0.0', port=8088, debug=True)

    # app.run(host='0.0.0.0', port=8081, debug=True, ssl_context=('userstudy.work.crt', 'userstudy.work.key'))

    # app.run('0.0.0.0', debug=True, port=11000, ssl_context=('path/xxxx.pem', 'path/xxxx.key')) 








