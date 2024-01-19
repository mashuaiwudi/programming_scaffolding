
var common_prefix = "http://107.151.253.158:8088/";

// 假设这是从网页中读取到的
var programming_problem = `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.`


var jsonData = null;

function call_server(){
    // 首先，向server发送问题，得到关于solution的相关信息
    $.ajax({
        url: common_prefix + "generate_idea",
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

            load_interface();

        }
        catch (error) {
            console.error('Error processing response:', error);
        }
    }).fail(function (jqXHR, textStatus, errorThrown) {
        console.error('AJAX request failed:', textStatus, errorThrown);
    });
}




// Given JSON data as a string
// var jsonData = `{
//     "solution1": {
//         "solution_name": "Two-Pointer Technique",
//         "solution_logic": "Use two pointers, one for iterating over the array (j) and another one (i) for keeping track of the position to overwrite with the unique elements. If nums[j] is different from nums[i], increment i and assign the value of nums[j] to nums[i]. The process continues until the end of the array.",
//         "algorithm_used": "Two-Pointer Technique",
//         "data_structure_used": "Array",
//         "solution_codes": "def remove_duplicates(nums):\\n    if not nums:\\n        return 0\\n\\n    i = 0\\n    for j in range(1, len(nums)):\\n        if nums[j] != nums[i]:\\n            i += 1\\n            nums[i] = nums[j]\\n    return i + 1\\n\\n# Example usage\\n# nums = [1, 1, 2]\\n# k = remove_duplicates(nums)\\n# print(f'Number of unique elements = {k} and modified array = {nums[:k]}')"
//     },
//     "solution2": {
//         "solution_name": "In-place Set Conversion",
//         "solution_logic": "Convert the sorted array into a set to eliminate duplicates, and then write the elements back into the original array maintaining order. Because the original array is sorted, converting into a set and converting back will retain order.",
//         "algorithm_used": "Set Conversion and Iteration",
//         "data_structure_used": "Set and Array",
//         "solution_codes": "def remove_duplicates(nums):\\n    unique_values = list(set(nums))\\n    unique_values.sort(key=lambda x: nums.index(x))\\n    for i in range(len(unique_values)):\\n        nums[i] = unique_values[i]\\n    return len(unique_values)\\n\\n# Example usage\\n# nums = [1, 1, 2]\\n# k = remove_duplicates(nums)\\n# print(f'Number of unique elements = {k} and modified array = {nums[:k]}')"
//     }
// }`;


var solution_time_complexity = {};
var solutions = null;
var solution_name_key = {};

function load_interface(){
    // var jsonData = `{
    //     "solution1": {
    //         "solution_name": "Two-Pointer Technique",
    //         "solution_logic": "Use two pointers, one for iterating over the array (j) and another one (i) for keeping track of the position to overwrite with the unique elements. If nums[j] is different from nums[i], increment i and assign the value of nums[j] to nums[i]. The process continues until the end of the array.",
    //         "algorithm_used": "Two-Pointer Technique",
    //         "data_structure_used": "Array",
    //         "solution_codes": "def remove_duplicates(nums):\\n    if not nums:\\n        return 0\\n\\n    i = 0\\n    for j in range(1, len(nums)):\\n        if nums[j] != nums[i]:\\n            i += 1\\n            nums[i] = nums[j]\\n    return i + 1\\n\\n# Example usage\\n# nums = [1, 1, 2]\\n# k = remove_duplicates(nums)\\n# print(f'Number of unique elements = {k} and modified array = {nums[:k]}')"
    //     },
    //     "solution2": {
    //         "solution_name": "In-place Set Conversion",
    //         "solution_logic": "Convert the sorted array into a set to eliminate duplicates, and then write the elements back into the original array maintaining order. Because the original array is sorted, converting into a set and converting back will retain order.",
    //         "algorithm_used": "Set Conversion and Iteration",
    //         "data_structure_used": "Set and Array",
    //         "solution_codes": "def remove_duplicates(nums):\\n    unique_values = list(set(nums))\\n    unique_values.sort(key=lambda x: nums.index(x))\\n    for i in range(len(unique_values)):\\n        nums[i] = unique_values[i]\\n    return len(unique_values)\\n\\n# Example usage\\n# nums = [1, 1, 2]\\n# k = remove_duplicates(nums)\\n# print(f'Number of unique elements = {k} and modified array = {nums[:k]}')"
    //     }
    // }`;
    // var solutions = JSON.parse(jsonData);
    solutions = jsonData;
    console.log(solutions);
    var candidateItemsDiv = document.getElementById('candidateItems');

    // 动态创建和添加元素
    Object.keys(solutions).forEach((key, index) => {
        const solution = solutions[key];
        solution_name_key[solution.solution_name] = key;


        // 创建外层draggable元素
        const draggableElement = document.createElement('div');
        draggableElement.classList.add('draggable');
        draggableElement.setAttribute('draggable', 'true');
        draggableElement.id = String.fromCharCode('A'.charCodeAt(0) + index); // This assumes the IDs are 'A', 'B', 'C', etc.
        draggableElement.textContent = solution.solution_name;

        // 创建info-icon和tooltip
        const infoIcon = document.createElement('span');
        infoIcon.classList.add('info-icon');
        infoIcon.textContent = '?';

        const tooltip = document.createElement('span');
        tooltip.classList.add('tooltip');
        tooltip.innerHTML = `
            <strong>Logic:</strong> ${solution.solution_logic}<br><br>
            <strong>Algorithm Used:</strong> ${solution.algorithm_used}<br><br>
            <strong>Data Structure Used:</strong> ${solution.data_structure_used}

        `;
        // <br><br>
        //     <strong>Code:</strong> <pre>${solution.solution_codes}</pre>


        // 对complexity的转化
        if (solution.time_complexity == "O(1)"){
            solution_time_complexity[solution.solution_name] = 0;
            
        }
        if (solution.time_complexity == "O(n)"){
            solution_time_complexity[solution.solution_name] = 1;
        }
        if (solution.time_complexity == "O(n log n)"){
            solution_time_complexity[solution.solution_name] = 2;
        }
        if (solution.time_complexity == "O(n^2)"){
            solution_time_complexity[solution.solution_name] = 3;
        }
        

        // 组装元素
        infoIcon.appendChild(tooltip);
        draggableElement.appendChild(infoIcon);

        // 将draggable元素添加到candidateItemsDiv
        candidateItemsDiv.appendChild(draggableElement);
    });



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







    // var solutions = JSON.parse(jsonData);
    // var candidateItemsDiv = document.getElementById('quizForm');

    // 获取表单元素
    const form = document.getElementById("quizForm");


    // 遍历JSON数据并添加到表单元素中
    for (const key in solutions) {
        if (solutions.hasOwnProperty(key)) {
            const solution = solutions[key];
            const solutionName = solution.solution_name;

            // 创建新的选项标签
            const optionLabel = document.createElement("label");
            optionLabel.className = "option";

            // 创建复选框
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.name = "option" + key; // 使用唯一的名称
            checkbox.value = solutionName;

            // 创建标签文本
            const labelText = document.createTextNode(" " + solutionName);

            // 创建info-icon和tooltip
            const infoIcon = document.createElement('span');
            infoIcon.classList.add('info-icon');
            infoIcon.textContent = '?';

            const tooltip = document.createElement('span');
            tooltip.classList.add('tooltip');
            tooltip.innerHTML = `
                <strong>Logic:</strong> ${solution.solution_logic}<br><br>
                <strong>Algorithm Used:</strong> ${solution.algorithm_used}<br><br>
                <strong>Data Structure Used:</strong> ${solution.data_structure_used}
            `;
            // <br><br>
            //     <strong>Code:</strong> <pre>${solution.solution_codes}</pre>


            // 组装元素
            infoIcon.appendChild(tooltip);

            // 将元素添加到标签中
            optionLabel.appendChild(checkbox);
            optionLabel.appendChild(labelText);
            optionLabel.appendChild(infoIcon);

            // 将标签添加到表单
            form.appendChild(optionLabel);
        }
    }































    // Matrix


    // 获取表格元素
    const table = document.querySelector("table");

    // 遍历JSON数据并添加到表格中
    for (const key in solutions) {
        if (solutions.hasOwnProperty(key)) {
            const solution = solutions[key];
            const solutionName = solution.solution_name;
            const solutionInfo = `Logic: ${solution.solution_logic}\nAlgorithm: ${solution.algorithm_used}\nData Structure: ${solution.data_structure_used}\nCode: ${solution.solution_codes}`;

            // 创建新行（tr）
            const row = document.createElement("tr");

            // 创建第一列（Solution Name）并添加问号图标
            const solutionCell = document.createElement("td");
            solutionCell.textContent = solutionName;
            solutionCell.className = "solution-cell";

            // 创建info-icon和tooltip
            const infoIcon = document.createElement('span');
            infoIcon.classList.add('info-icon');
            infoIcon.textContent = '?';

            const tooltip = document.createElement('span');
            tooltip.classList.add('tooltip');
            tooltip.innerHTML = `
                <strong>Logic:</strong> ${solution.solution_logic}<br><br>
                <strong>Algorithm Used:</strong> ${solution.algorithm_used}<br><br>
                <strong>Data Structure Used:</strong> ${solution.data_structure_used}
            `;
            // 组装元素
            infoIcon.appendChild(tooltip);
            solutionCell.appendChild(infoIcon);

            // 创建第二、三、四列并添加单选按钮
            const optionACell = document.createElement("td");
            const optionAInput = document.createElement("input");
            optionAInput.type = "radio";
            optionAInput.name = "option" + key;
            optionAInput.value = "O(n^2)";
            optionACell.appendChild(optionAInput);
                  
            const optionBCell = document.createElement("td");
            const optionBInput = document.createElement("input");
            optionBInput.type = "radio";
            optionBInput.name = "option" + key;
            optionBInput.value = "O(n log n)";
            optionBCell.appendChild(optionBInput);

            const optionCCell = document.createElement("td");
            const optionCInput = document.createElement("input");
            optionCInput.type = "radio";
            optionCInput.name = "option" + key;
            optionCInput.value = "O(n)";
            optionCCell.appendChild(optionCInput);

            // 将列添加到行中
            row.appendChild(solutionCell);
            row.appendChild(optionACell);
            row.appendChild(optionBCell);
            row.appendChild(optionCCell);

            // 将行添加到表格中
            table.appendChild(row);
        }
    }



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

function checkAnswer_rank() {

    const selectedItems = document.getElementById("selectedItems").getElementsByClassName("draggable");
    let selectedAnswers = Array.from(selectedItems).map(item => item.textContent.trim().split('?')[0]);

    console.log(selectedAnswers);
    console.log(solution_time_complexity);

    let sortedArray = Object.entries(solution_time_complexity).sort((a, b) => b[1] - a[1]);

    let keysArray = sortedArray.map(entry => entry[0]);

    console.log(keysArray); // 输出排序后的键数组，例如：['A', 'C', 'B']
    
    if (selectedAnswers.length === keysArray.length && selectedAnswers.every((value, index) => value === keysArray[index])) {
        var feedback = document.getElementById('feedback_rank');

        feedback.innerHTML = "<b>Correct!</b>";
        feedback.className = 'correct-text';
    } else {
        var feedback = document.getElementById('feedback_rank');
        var incorrect_feedback_text = "<b>Incorrect answer!</b><br><b>The correct order should be: </b><br>";
        for (var i=0; i<keysArray.length; i++){
            incorrect_feedback_text = incorrect_feedback_text + "(" + (i+1) + ") " + keysArray[i] + " (<b>time complexity</b>: " + 
            solutions[solution_name_key[keysArray[i]]].time_complexity + ", <b>reason</b>: " + solutions[solution_name_key[keysArray[i]]].reason_of_time_complexity + ")<br>";
        }
        feedback.innerHTML = incorrect_feedback_text;
        feedback.className = 'error-text';
    }
}






function checkAnswer_choose() {
    // Define the correct answers (add the actual correct answers)
    var correctAnswers = []; // example: only "solution1" is correct
    // 首先计算出正确的answer，假设要求的时间复杂度是O(n logn)，对应数字2，只要时间复杂度小于等于2的都算正确。
    // 遍历JSON数据并添加到表格中
    for (const key in solutions) {
        if (solutions.hasOwnProperty(key)) {
            const solution = solutions[key];
            if (solution.time_complexity == "O(1)" || solution.time_complexity == "O(n)" || solution.time_complexity == "O(n log n)"){
                correctAnswers.push(solution.solution_name);
            }
        }
    }

    console.log(correctAnswers);


    var selectedOptions = [];
    var checkboxes = document.querySelectorAll("input[type='checkbox']:checked");

    // Collect all selected options
    for (var checkbox of checkboxes) {
        selectedOptions.push(checkbox.value);
    }


    console.log(selectedOptions);

    // Compare selected options with the correct answers
    var allCorrect = correctAnswers.every(val => selectedOptions.includes(val)) && (correctAnswers.length == selectedOptions.length);

    // Provide feedback
    if (allCorrect) {
        var feedback = document.getElementById('feedback_choose');

        feedback.innerHTML = "<b>Correct!</b>";
        feedback.className = 'correct-text';
    } else {
        var feedback = document.getElementById('feedback_choose');


        var incorrect_feedback_text = "<b>Incorrect answer!</b><br><b>Explanation:</b><br>";


        for (const key in solutions) {
            if (solutions.hasOwnProperty(key)) {
                const solution = solutions[key];
                incorrect_feedback_text = incorrect_feedback_text + solution.solution_name + ": <b>time complexity</b>:" + solution.time_complexity + ", <b>reason</b>: " + solution.reason_of_time_complexity + ")<br>";
            }
        }

        feedback.innerHTML = incorrect_feedback_text;

        feedback.className = 'error-text';
    }
}



function checkAnswer_matrix(){

    var selectedAnswers = [];
    var checkboxes = document.querySelectorAll(`input[type="radio"]:checked`);

    // Collect all selected options
    for (var checkbox of checkboxes) {
        selectedAnswers.push(checkbox.value);
    }



    console.log(selectedAnswers);
    console.log(selectedAnswers.length);

    var correctAnswers = []; // example: only "solution1" is correct
    var solution_name = [];
    var time_complexity_reason = [];
    // 首先计算出正确的answer，假设要求的时间复杂度是O(n logn)，对应数字2，只要时间复杂度小于等于2的都算正确。
    // 遍历JSON数据并添加到表格中
    for (const key in solutions) {
        if (solutions.hasOwnProperty(key)) {
            const solution = solutions[key];
            correctAnswers.push(solution.time_complexity);
            solution_name.push(solution.solution_name);
            time_complexity_reason.push(solution.reason_of_time_complexity);
        }
    }

    console.log(correctAnswers);

    console.log(correctAnswers.length);

    if (selectedAnswers == null){
        var feedback = document.getElementById('feedback_matrix');
        feedback.innerHTML = 'Please answer all question';
        feedback.className = 'warning-text';
    }
    else{
        if (selectedAnswers.length < correctAnswers.length){
            var feedback = document.getElementById('feedback_matrix');
            feedback.innerHTML = 'Please answer all question';
            feedback.className = 'warning-text';
        }
        else{
            if (selectedAnswers.length === correctAnswers.length && selectedAnswers.every((value, index) => value === correctAnswers[index])) {
                var feedback = document.getElementById('feedback_matrix');
        
                feedback.innerHTML = "<b>Correct!</b>";
                feedback.className = 'correct-text';
            } else {
                var feedback = document.getElementById('feedback_matrix');
                var incorrect_feedback_text = "<b>Incorrect answer!</b><br><b>The actual answer is:</b><br>";
                for (var i=0; i<correctAnswers.length; i++){
                    incorrect_feedback_text = incorrect_feedback_text + "<b>" + solution_name[i] + ":</b> <b>Time Complexity:</b> " + correctAnswers[i] + ", <b>Reason: </b>" + time_complexity_reason[i] + "<br>";
                }
                feedback.innerHTML = incorrect_feedback_text;
                feedback.className = 'error-text';
            }
        }
    }



}
