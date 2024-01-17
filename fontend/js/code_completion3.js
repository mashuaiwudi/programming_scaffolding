// iframe中页面A的代码
window.addEventListener('message', function(event) {
  if (event.data === 'displayChanged') {
      console.log('iframe display is now block');
      // 执行一些操作
      editor.refresh();

      // 获取所有动态大小的输入框
      const dynamicInputs = document.querySelectorAll('input.fill-blank');

      dynamicInputs.forEach(input => {
          // 设置初始大小
          input.setAttribute('size', input.value.length || 1);
      
          // 监听输入事件以更新大小
          input.addEventListener('input', function() {
              this.setAttribute('size', this.value.length || 1);
          });
      });
  }
});





// Given JSON data as a string
var jsonData = `{
  "code_with_spaces": "def removeDuplicates(nums):\n    if not nums:\n        return [TO FILL]\n\n    # Initialize the two pointers\n    i = [TO FILL] # The slow pointer\n    for j in range([TO FILL], len(nums)): # The fast pointer\n        # When a unique element is encountered\n        if nums[j] != nums[i]:\n            # Move the slow pointer\n            i += [TO FILL]\n            # Replace the element at the slow pointer with the current element\n            nums[i] = nums[j]\n\n    # Return the number of unique elements\n    return i + [TO FILL]\n"
}`


var actual_code = ['0', '0', '1', '1', '1'];
// "def remove_duplicates(nums):": ["Defines a function named 'remove_duplicates' taking 'nums' as input.", "Start of a function definition that aims to remove duplicates from an array."],
// "if not nums:": ["Checks if the input array 'nums' is empty or not.", "Conditional check for empty array to handle the edge case of an empty input."],
// "return 0": ["Return 0 if 'nums' is empty.", "No elements to process, so return 0 indicating no unique elements."],
// "i = 0": ["Initialize a pointer 'i' to 0.", "Set up a pointer to track the position of the last unique element found."],
// "for j in range(1, len(nums))": ["Start a loop with pointer 'j' starting from 1 to the end of 'nums'.", "Iterate over the array, starting from the second element, to compare adjacent elements."],
// "if nums[j] != nums[i]": ["Check if the current element is different from the last unique element found.", "Conditional check for finding a new unique element."],
// "i += 1": ["Increment the pointer 'i'.", "Move the unique elements' pointer to the next position where a new unique element will be placed."],
// "nums[i] = nums[j]": ["Assign the value at 'j' to the position at 'i'.", "Copy the unique element to its new position in the array."],
// "return i + 1": ["Return the total number of unique elements found in 'nums'.", "The result is the index plus one because array indexing is zero-based."]



// console.log(jsonData)

// // 将字符串中的换行符（\n）替换为它们的字面量表示（\\n）
var jsonData_converted = jsonData.replaceAll("\n", "\\n");
var jsonData_converted = jsonData_converted.replaceAll("{\\n", "{");
var jsonData_converted = jsonData_converted.replaceAll("\\n}", "}");


console.log(jsonData_converted)

jsonData = JSON.parse(jsonData_converted);


const originalCode = jsonData.code_with_spaces;
// `
// class Solution:
//     def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
//         dummyHead = ListNode(0)
//         tail = dummyHead
//         carry = 0

//         while l1 [TO FILL] None or l2 [TO FILL] None or carry != 0:
//             digit1 = l1.val if l1 [TO FILL] None else 0
//             digit2 = l2.val if l2 [TO FILL] None else 0

//             sum = digit1 + digit2 + carry
//             digit = sum % 10
//             carry = sum // 10

//             newNode = ListNode(digit)
//             tail.next = newNode
//             tail = tail.next

//             l1 = l1.next if l1 [TO FILL] None else None
//             l2 = l2.next if l2 [TO FILL] None else None

//         result = dummyHead.next
//         dummyHead.next = None
//         return result
//     `.trim();

    document.getElementById('editor').innerHTML = originalCode;

  var editor = CodeMirror.fromTextArea(document.getElementById('editor'), {
    lineNumbers: true,
    mode: 'python'
  });


  var inputs = [];



  function addInputFields() {
    var cursor = editor.getSearchCursor("[TO FILL]");
    while(cursor.findNext()) {
      var from = cursor.from();
      var to = cursor.to();

      var input = document.createElement("input");
      input.setAttribute("type", "text");
      input.setAttribute("class", "fill-blank");
      inputs.push({from, to, input}); // 存储input信息以备后用

      editor.markText(from, to, {replacedWith: input});
    }
  }

  // 确保在编辑器准备就绪后添加输入框
  editor.on("refresh", addInputFields);

  // 初始加载代码后立即添加输入框
  addInputFields();


// here


  // 复制完整代码到剪贴板
  document.getElementById('copyButton').addEventListener('click', function() {
    var fullCode = editor.getValue();
    inputs.forEach(function(item) {
      fullCode = fullCode.replace("[TO FILL]", item.input.value); // 替换占位符为用户输入
    });
    
    navigator.clipboard.writeText(fullCode).then(function() {
      alert("Code copied to clipboard!");
    }, function(err) {
      console.error('Cannot copy the code: ', err);
    });
  });



  // 用户实在写不出来了，把代码帮用户补全
  document.getElementById('showallButton').addEventListener('click', function() {
    var fullCode = editor.getValue();

    var i = 0;
    inputs.forEach(function(item) {
      item.input.value = actual_code[i];
      i += 1;
    });

  });
