


let learner_code_content = '';
let problem_content = '';

var common_prefix = "http://107.151.253.158:8088/";


// 获取网页中的problem！
// chrome.runtime.onMessage.addListener((request, sender) =>{
//     console.log('request', request['problem_content']);
//     document.getElementById('problem_content').textContent = request['problem_content'];
//     problem_content = request['problem_content'];
//     document.getElementById('learner_code').textContent = request['learner_code'];
//     learner_code_content = request['learner_code'];

//     console.log('???????????????why twice');
//     console.log(learner_code_content)
//     identify_which_step('listen');
//     // let message = {
//     //     problem: request['problem_content']
//     //   };
//     //   document.getElementById('theFrame').contentWindow.postMessage(message, '*');
// });



document.addEventListener('DOMContentLoaded', (event) => {
    // 页面加载完成后执行的代码
    console.log("Side Panel loaded!");
    
    // 在这里执行其他操作，比如初始化UI元素、设置事件监听器等

    identify_which_step('load');

});




// let counter = 100;

// document.getElementById('sendMessage').addEventListener('click', function () {
//     counter++;
//     let message = {
//       command: 'render',
//       templateName: 'sample-template-' + counter,
//       context: { counter: counter }
//     };
//     document.getElementById('theFrame').contentWindow.postMessage(message, '*');
// });


function resizeIframe(iframe) {
    try {
        var body = iframe.contentWindow.document.body,
            html = iframe.contentWindow.document.documentElement;

        var height = Math.max(body.scrollHeight, body.offsetHeight, 
                              html.clientHeight, html.scrollHeight, html.offsetHeight);

        iframe.style.height = height + 'px';
    } catch (e) {
        console.error("Error resizing iframe: " + e.message);
    }
}



function open_step1(){
    document.getElementById('step1').classList.add('active');
    document.getElementById('step2').classList.remove('active');
    document.getElementById('step3').classList.remove('active');
    document.getElementById('step4').classList.remove('active');
    // Update progress bar width
    var progressBar = document.getElementById('progress-bar');
    var newWidth = ((1 - 1) / (4 - 1)) * 100;
    progressBar.style.width = newWidth + '%';

    document.getElementById("problem_area").style.display = "none";
    document.getElementById("theFrame1").style.display = "block";
    document.getElementById("theFrame2-1").style.display = "none";
    // document.getElementById("theFrame2-2").style.display = "none";
    // document.getElementById("theFrame2-3").style.display = "none";
    document.getElementById("theFrame3").style.display = "none";
    document.getElementById("theFrame4-1").style.display = "none";
    document.getElementById("theFrame4-2").style.display = "none";
}

function open_step2(){
    document.getElementById('step1').classList.add('active');
    document.getElementById('step2').classList.add('active');
    document.getElementById('step3').classList.remove('active');
    document.getElementById('step4').classList.remove('active');
    // Update progress bar width
    var progressBar = document.getElementById('progress-bar');
    var newWidth = ((2 - 1) / (4 - 1)) * 100;
    progressBar.style.width = newWidth + '%';


    document.getElementById("theFrame1").style.display = "none";
    document.getElementById("theFrame2-1").style.display = "block";
    // document.getElementById("theFrame2-2").style.display = "block";
    // document.getElementById("theFrame2-3").style.display = "block";
    document.getElementById("theFrame3").style.display = "none";
    document.getElementById("theFrame4-1").style.display = "none";
    document.getElementById("theFrame4-2").style.display = "none";
}


function open_step3(){
    document.getElementById('step1').classList.add('active');
    document.getElementById('step2').classList.add('active');
    document.getElementById('step3').classList.add('active');
    document.getElementById('step4').classList.remove('active');
    // Update progress bar width
    var progressBar = document.getElementById('progress-bar');
    var newWidth = ((3 - 1) / (4 - 1)) * 100;
    progressBar.style.width = newWidth + '%';


    document.getElementById("theFrame1").style.display = "none";
    document.getElementById("theFrame2-1").style.display = "none";
    // document.getElementById("theFrame2-2").style.display = "none";
    // document.getElementById("theFrame2-3").style.display = "none";
    document.getElementById("theFrame3").style.display = "block";
    document.getElementById("theFrame4-1").style.display = "none";
    document.getElementById("theFrame4-2").style.display = "none";
}


function open_step4(){
    document.getElementById('step1').classList.add('active');
    document.getElementById('step2').classList.add('active');
    document.getElementById('step3').classList.add('active');
    document.getElementById('step4').classList.add('active');
    // Update progress bar width
    var progressBar = document.getElementById('progress-bar');
    var newWidth = ((4 - 1) / (4 - 1)) * 100;
    progressBar.style.width = newWidth + '%';


    document.getElementById("theFrame1").style.display = "none";
    document.getElementById("theFrame2-1").style.display = "none";
    // document.getElementById("theFrame2-2").style.display = "none";
    // document.getElementById("theFrame2-3").style.display = "none";
    document.getElementById("theFrame3").style.display = "none";
    // document.getElementById("theFrame4-1").style.display = "block";
    document.getElementById("theFrame4-2").style.display = "block";

    var iframe = document.getElementById('theFrame4-1');
    iframe.style.display = 'block';
    iframe.contentWindow.postMessage('displayChanged', '*');
}



document.getElementById('step1').addEventListener('click', function () {
    open_step1();
});


document.getElementById('step2').addEventListener('click', function () {
    open_step2();
});


document.getElementById('step3').addEventListener('click', function () {
    open_step3();
});


document.getElementById('step4').addEventListener('click', function () {
    open_step4();
});










function identify_which_step(reason) {

    console.log('========================')
    console.log(reason);
    // 首先，向server发送问题，得到关于solution的相关信息
    $.ajax({
    url: common_prefix + "identify_step",
    type: "GET",
    data: {
        "problem": String(problem_content), 
        "learner_code": String(learner_code_content)
    }
    }).done(function (data) {
        try {
            console.log(data);

            // 检查data是否已经是对象
            var jsonData = (typeof data === "object") ? data : JSON.parse(data);
            console.log("JSON Object:", jsonData);

            // 执行操作
            if(jsonData.current_stage == "1"){
                open_step1();
            }
            if(jsonData.current_stage == "2"){
                open_step2();
            }
            if(jsonData.current_stage == "3"){
                open_step3();
            }
            if(jsonData.current_stage == "4"){
                open_step4();
            }



        }
        catch (error) {
            console.error('Error processing response:', error);
        }
    }).fail(function (jqXHR, textStatus, errorThrown) {
        console.error('AJAX request failed:', textStatus, errorThrown);
    });


}