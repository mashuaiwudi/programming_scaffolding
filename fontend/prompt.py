import openai
openai.api_key = "" 

import json
import time



def is_valid_output(output):
    """Check if the output is in the desired format."""
    # Desired format
#     required_keys = ['solution1','solution2']
#     # Check if all required keys are in the output and they are not empty
#     if isinstance(output, dict) and all(key in output and output[key] for key in required_keys):
#         return True
#     return False
    return True

def generate_response0(prompt, model):
    message_content = prompt
    while True:
        try:
            completion = openai.ChatCompletion.create(
                model=model,
                messages=[{"role": "user", "content": message_content}],
                response_format={"type": "json_object"}
            )
            content = completion.choices[0].message['content']
            
            # Check if output meets the requirement
            if is_valid_output(content):
                return content
            else:
                print("Output does not meet the requirement. Retrying...")
                time.sleep(2)
                
        except Exception as e:
            print(f"Error occurred while generating response: {e}. Retrying in 2 seconds...")
            time.sleep(2)
# def generate_response0(prompt, model):
#     messeage_content = prompt
#     completion = openai.ChatCompletion.create(
#                 model=model,
#                 messages=[{"role": "user", "content": messeage_content}],
#                 response_format={"type": "json_object"}
#             )
#     return completion
            
prompt = ''' Task: Given the programming problem solutions, please generate explanation for each line of the code.
Instruction: Please ONLY RETURN the result in this JSON format: {'solution1':{code_line1:['the first line of the solution code','the short explanation of this line of code']},'solution2':{...}}
Given solution: {
    "solution1": {
        "solution_name": "Two-Pointer Technique",
        "solution_logic": "Use two pointers, one for iterating over the array (j) and another one (i) for keeping track of the position to overwrite with the unique elements. If nums[j] is different from nums[i], increment i and assign the value of nums[j] to nums[i]. The process continues until the end of the array.",
        "algorithm_used": "Two-Pointer Technique",
        "data_structure_used": "Array",
        "solution_codes": "def remove_duplicates(nums):\n    if not nums:\n        return 0\n\n    i = 0\n    for j in range(1, len(nums)):\n        if nums[j] != nums[i]:\n            i += 1\n            nums[i] = nums[j]\n    return i + 1\n\n# Example usage\n# nums = [1, 1, 2]\n# k = remove_duplicates(nums)\n# print(f'Number of unique elements = {k} and modified array = {nums[:k]}')"
    },
    "solution2": {
        "solution_name": "In-place Set Conversion",
        "solution_logic": "Convert the sorted array into a set to eliminate duplicates, and then write the elements back into the original array maintaining order. Because the original array is sorted, converting into a set and converting back will retain order.",
        "algorithm_used": "Set Conversion and Iteration",
        "data_structure_used": "Set and Array",
        "solution_codes": "def remove_duplicates(nums):\n    unique_values = list(set(nums))\n    unique_values.sort(key=lambda x: nums.index(x))\n    for i in range(len(unique_values)):\n        nums[i] = unique_values[i]\n    return len(unique_values)\n\n# Example usage\n# nums = [1, 1, 2]\n# k = remove_duplicates(nums)\n# print(f'Number of unique elements = {k} and modified array = {nums[:k]}')"
    }
}'''
# model_name = "gpt-3.5-turbo-1106"

model_name = "gpt-4-1106-preview"


result = generate_response0(prompt,model_name)
print(result)
# print(result.choices[0].message['content'])