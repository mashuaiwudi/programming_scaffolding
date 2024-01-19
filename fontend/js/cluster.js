
var common_prefix = "http://107.151.253.158:8088/";

// 假设这是从网页中读取到的
var programming_problem = `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.`

var jsonData = null;

var myChart = echarts.init(document.getElementById('main'));
var code_list = ["This approach uses two pointers to iterate through the array. One pointer (i) goes through each element, while the other (k) keeps track of the position to insert the next unique element.",
"This method uses a set to keep track of unique elements. It's less efficient due to the use of extra space but still meets the requirement.",
"Using Python's standard library, specifically the itertools.groupby function, to group by unique elements and then overwrite the original array.",
"Similar to the two-pointer approach but using a while loop. This is more explicit and might be easier to understand for some.",
"For a more Pythonic, functional approach, though it doesn't strictly adhere to in-place modification:"]
option = {

    tooltip: {
        show: false,
        formatter: function (params) {
            console.log(params.data.label);
            if(params.data.label === 'code 1'){
                // 创建一个包含你文本的div
                // 设置样式以允许长文本换行
                var tooltipHtml = '<div style="max-width:200px; word-break:break-all; white-space:normal;">';
                // 添加自定义文本内容。例如，显示系列名和数据
                tooltipHtml += '<b>Key idea:</b><br>' + code_list[0];
                // 根据需要添加更多信息
                // ...
                // 关闭div标签
                tooltipHtml += '</div>';
                // 返回HTML字符串
                return tooltipHtml;
            }
            if(params.data.label === 'code 2-GPT generated code'){
                // 创建一个包含你文本的div
                // 设置样式以允许长文本换行
                var tooltipHtml = '<div style="max-width:200px; word-break:break-all; white-space:normal;">';
                // 添加自定义文本内容。例如，显示系列名和数据
                tooltipHtml += '<b>Key idea:</b><br>' + code_list[1];
                // 根据需要添加更多信息
                // ...
                // 关闭div标签
                tooltipHtml += '</div>';
                // 返回HTML字符串
                return tooltipHtml;
            }
            if(params.data.label === 'code 3'){
                // 创建一个包含你文本的div
                // 设置样式以允许长文本换行
                var tooltipHtml = '<div style="max-width:200px; word-break:break-all; white-space:normal;">';
                // 添加自定义文本内容。例如，显示系列名和数据
                tooltipHtml += '<b>Key idea:</b><br>' + code_list[2];
                // 根据需要添加更多信息
                // ...
                // 关闭div标签
                tooltipHtml += '</div>';
                // 返回HTML字符串
                return tooltipHtml;
            }
            if(params.data.label === 'code 4'){
                // 创建一个包含你文本的div
                // 设置样式以允许长文本换行
                var tooltipHtml = '<div style="max-width:200px; word-break:break-all; white-space:normal;">';
                // 添加自定义文本内容。例如，显示系列名和数据
                tooltipHtml += '<b>Key idea:</b><br>' + code_list[3];
                // 根据需要添加更多信息
                // ...
                // 关闭div标签
                tooltipHtml += '</div>';
                // 返回HTML字符串
                return tooltipHtml;
            }
            if(params.data.label === 'code 5'){
                // 创建一个包含你文本的div
                // 设置样式以允许长文本换行
                var tooltipHtml = '<div style="max-width:200px; word-break:break-all; white-space:normal;">';
                // 添加自定义文本内容。例如，显示系列名和数据
                tooltipHtml += '<b>Key idea:</b><br>' + code_list[4];
                // 根据需要添加更多信息
                // ...
                // 关闭div标签
                tooltipHtml += '</div>';
                // 返回HTML字符串
                return tooltipHtml;
            }
        }
    },
    legend: {
        data: ['Two-Pointer Technique', 'In-Place Set Conversion'],
        textStyle: {
                    fontSize: 20 // 设置字体大小为20
        },
    },
    grid: {  // 调整网格位置，为美化做准备
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        // ... xAxis其他配置 ...
        axisLine: {  // 隐藏x轴轴线
            show: false
        },
        axisTick: {  // 隐藏x轴刻度
            show: false
        },
        axisLabel: {
            show: false // 将 axisLabel 设置为 false，隐藏 x 轴上的数字
        },
        splitLine: {  // 显示x轴grid线
            show: false,
            lineStyle: {
                color: '#d0d0d0',  // 设置grid线的颜色
                type: 'dashed'  // 设置grid线为虚线
            }
        }
    },
    yAxis: {
        // ... yAxis其他配置 ...
        axisLine: {  // 隐藏y轴轴线
            show: false
        },
        axisTick: {  // 隐藏y轴刻度
            show: false
        },
        axisLabel: {
            show: false // 将 axisLabel 设置为 false，隐藏 x 轴上的数字
        },
        splitLine: {  // 显示y轴grid线
            show: false,
            lineStyle: {
                color: '#d0d0d0',  // 设置grid线的颜色
                type: 'dashed'  // 设置grid线为虚线
            }
        }
    },


    // xAxis: {type: 'value'},
    // yAxis: {type: 'value'},
    series: [
        {
            name: 'Two-Pointer Technique',
            type: 'scatter',
            data: [
                {value: [-1.0936304,  -0.11520867], label: 'code 1'},
                {value: [-0.1254594,  -1.1533587 ], label: 'code 2-GPT generated code', itemStyle: {color: 'orange'}},
                {value: [ 0.49739864,  1.7952394 ], label: 'code 3'}                        
            ],
            label: {
                show: false,
                textStyle: {
                    fontSize: 20 // 设置字体大小为20
                },
                position: 'right',
                formatter: function (params) {
                    return params.data.label;
                }
            }
        },
        {
            name: 'In-Place Set Conversion',
            type: 'scatter',
            data: [
                {value: [2.8384759,   0.08574535], label: 'code 4'},
                {value: [3.1301661, -0.61241746], label: 'code 5'}
            ],
            // 设置整个系列的颜色
            itemStyle: {
                normal: {
                    color: 'green' // 默认蓝色
                }
            },
            label: {
                show: false,
                textStyle: {
                    fontSize: 20 // 设置字体大小为20
                },
                position: 'right',
                formatter: function (params) {
                    return params.data.label;
                }
            }
        }
        
        // ... 其他聚类数据
    ]
};


myChart.setOption(option);

// 添加点击事件监听器
myChart.on('click', function (params) {
    // alert('You clicked on ' + params.data.label);
    if(params.data.label === 'code 1'){
        // alert('You clicked on ' + params.name + ': ' + params.value);
    }
    if(params.data.label === 'code 2-GPT generated code'){
        // alert('You clicked on ' + params.name + ': ' + params.value);
        document.getElementById("solutionspace").style.display = "none";
        document.getElementById("theFrame3-1").style.display = "block";
        // 首先，向server发送问题，得到关于solution的相关信息
        $.ajax({
            url: common_prefix + "generate_step",
            type: "GET",
            async: true,
                data: {
                "problem": String(programming_problem)}
                }).done(function (data) {
                try{
                    console.log(data);

                    try {
                        jsonData = JSON.parse(data);
                        console.log("JSON Object:", jsonData); // This should print the object, not a string
                    } catch (e) {
                        console.error("Parsing error:", e);
                    }

                    load_step3_interface();

                }
                catch (error) {
                    console.error('Error processing response:', error);
                }
            }).fail(function (jqXHR, textStatus, errorThrown) {
                console.error('AJAX request failed:', textStatus, errorThrown);
            });
    }
    if(params.data.label === 'code 3'){
        // alert('You clicked on ' + params.name + ': ' + params.value);
    }
    if(params.data.label === 'code 4'){
        // alert('You clicked on ' + params.name + ': ' + params.value);
    }
    if(params.data.label === 'code 5'){
        // alert('You clicked on ' + params.name + ': ' + params.value);
        

    }
    
});   



var correctsteps = [];
var incorrect_steps = [];
var shuffleAllSteps = [];

function load_step3_interface(){
    // Given JSON data as a string
    // var jsonData = `{
    //     "solution1": {
    //         "key_steps": [
    //             "Initialize a starting pointer insertPos to position 1.",
    //             "Iterate through the array starting from index 1 using a pointer i.",
    //             "Compare the element at index i with the element at index i - 1.",
    //             "If they are not equal, assign the element at i to position insertPos and increment insertPos.",
    //             "Increment pointer i each iteration.",
    //             "Return the value of insertPos as the count of unique elements."
    //         ],
    //         "incorrect_steps": [
    //             "Decrement insertPos instead of incrementing it when a unique element is found.",
    //             "Return the length of the array instead of the insertPos."
    //         ]
    //     },
    //     "solution2": {
    //         "key_steps": [
    //             "Create an empty set named unique_set to track unique elements.",
    //             "Initialize unique_count to 0.",
    //             "Iterate over each element in the nums list.",
    //             "Check if the current element is not in unique_set.",
    //             "If not, add the current element to unique_set.",
    //             "Replace the element at index of unique_count with the current element.",
    //             "Increment unique_count each time a new element is added to unique_set.",
    //             "Return unique_count as the total number of unique elements."
    //         ],
    //         "incorrect_steps": [
    //             "Add the current element to the set before checking if it's a duplicate.",
    //             "Decrement unique_count after adding a new element."
    //         ]
    //     }
    // }`;

    var solutions = jsonData;
    var candidateItemsDiv = document.getElementById('candidateItems');


    correctsteps = correctsteps.concat(solutions["solution1"].key_steps);
    incorrect_steps = incorrect_steps.concat(solutions["solution1"].incorrect_steps);

    shuffleAllSteps = shuffleAllSteps.concat(solutions["solution1"].key_steps);
    shuffleAllSteps = shuffleAllSteps.concat(solutions["solution1"].incorrect_steps);


    // Function to shuffle an array
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    shuffleArray(shuffleAllSteps);

    for (var step in shuffleAllSteps) {
        // 创建外层draggable元素
        const draggableElement = document.createElement('div');
        draggableElement.classList.add('draggable');
        draggableElement.setAttribute('draggable', 'true');
        // draggableElement.id = String.fromCharCode('A'.charCodeAt(0) + index); // This assumes the IDs are 'A', 'B', 'C', etc.
        draggableElement.textContent = shuffleAllSteps[step];

        // 将draggable元素添加到candidateItemsDiv
        candidateItemsDiv.appendChild(draggableElement);
    }


    document.querySelectorAll('.draggable').forEach(item => {
        item.addEventListener('dragstart', function (e) {

            draggedItem = item;
            placeholder = createPlaceholder(item.offsetHeight);
            setTimeout(() => (item.style.display = "none"), 0);

            // 创建一个临时元素用于拖动预览
            var dragImage = item.cloneNode(true);
            dragImage.style.position = "absolute";
            dragImage.style.top = "-99999px"; // 将预览元素放置在屏幕之外
            dragImage.style.width = item.offsetWidth + "px"; // 确保宽度相同
            document.body.appendChild(dragImage); // 添加到文档中以便可以用作拖动图像

            // 计算鼠标相对于元素的偏移量
            var rect = item.getBoundingClientRect();
            var offsetX = e.clientX - rect.left;
            var offsetY = e.clientY - rect.top;

            // 使用自定义元素作为拖动图像，并根据实际鼠标位置设置偏移
            e.dataTransfer.setDragImage(dragImage, offsetX, offsetY);

            // 在拖动结束后删除临时元素
            setTimeout(() => {
                document.body.removeChild(dragImage);
            }, 0);
        });
        

        item.addEventListener('dragend', function () {
            draggedItem.style.display = "block";
            draggedItem = null;
            if (placeholder && placeholder.parentNode) {
                placeholder.parentNode.removeChild(placeholder);
            }
            isDraggingStarted = false;
        });
    });

    document.querySelectorAll('.column').forEach(column => {
        column.addEventListener('dragover', function (e) {
            e.preventDefault();
            if (!draggedItem) return;
            const afterElement = getDragAfterElement(column, e.clientY);
            if (afterElement) {
                column.insertBefore(placeholder, afterElement);
            } else {
                column.appendChild(placeholder);
            }
            isDraggingStarted = true;
        });

        column.addEventListener('drop', function (e) {
            e.preventDefault();
            if (!draggedItem) return;
            if (isDraggingStarted) {
                column.insertBefore(draggedItem, placeholder);
            }
        });
    });
}
    



let draggedItem = null;
let placeholder = null;
let isDraggingStarted = false;

// 创建一个占位符
function createPlaceholder(height) {
    let ph = document.createElement("div");
    ph.classList.add("draggable");
    ph.style.visibility = "hidden";
    ph.style.height = `${height}px`;
    return ph;
}



function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.draggable:not(.invisible)')];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}




document.getElementById("submitButton").addEventListener("click", function() {
    // 在这里编写点击事件的处理代码
    checkAnswer();
});


function checkAnswer() {

    const selectedItems = document.getElementById("selectedItems").getElementsByClassName("draggable");
    let selectedAnswers = Array.from(selectedItems).map(item => item.textContent.trim());
    
    console.log(selectedAnswers);
    console.log(correctsteps);
    console.log(shuffleAllSteps);
    console.log(incorrect_steps);


    if (selectedAnswers.length === correctsteps.length && selectedAnswers.every((value, index) => value === correctsteps[index])) {
        var feedback = document.getElementById('feedback');

        feedback.innerHTML = "The Steps Are Correct!";
        feedback.className = 'list-group-item list-group-item-action list-group-item-success';


    } else {
        var feedback = document.getElementById('feedback');
        // 进行更加精细的判断
        
        // 如果包含了错误的step，告诉人们包含了错误的step
        if (selectedAnswers.some((value, index) => incorrect_steps.includes(value))){
            feedback.innerHTML = "You selected some incorrect steps!";
        }
        else{
            // 如果少了正确的step，告诉人们少了正确的step
            if (selectedAnswers.length < correctsteps.length){
                feedback.innerHTML = "You missed some correct steps!";
            }
            else{
                // 如果正确的step顺序错了，告诉人们顺序错了，不需要告诉人们具体哪一个的顺序错了
                if (selectedAnswers.some((value, index) => value !== correctsteps[index])) {
                    feedback.innerHTML = "The order is incorrect, please check it!";
                }
            }
        }
        
        
        feedback.className = 'list-group-item list-group-item-action list-group-item-danger';
    }

    copy_to_editor(selectedAnswers);
}


var combined_note = '';
// 这里我加入一个特别fancy的功能，就是一旦用户把步骤排序正确了，我们希望下一步用户自己根据步骤一步一步把代码实现出来，因此我们可以将步骤自动copy到editor中作为注释出现！
function copy_to_editor(selectedAnswers){
    combined_note = '';
    for (var i=0; i<selectedAnswers.length; i++){
        combined_note = combined_note + '#' + selectedAnswers[i] + '\n\n\n';
    }
    console.log('已发送')
    window.parent.postMessage({ greeting: combined_note}, "*");
}





// 复制完整代码到剪贴板
document.getElementById('copyStep').addEventListener('click', function() {
    checkAnswer();
    navigator.clipboard.writeText(combined_note).then(function() {
        alert("Code copied to clipboard!");
    }, function(err) {
        console.error('Cannot copy the code: ', err);
    });
});


