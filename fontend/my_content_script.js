

// window.onload = () =>{
//     console.log(document.getElementsByClassName("elfjS"));
//     console.log(document.getElementsByClassName("elfjS")[0]);
//     console.log(document.getElementsByClassName("elfjS").item(1));
//     console.log(document.getElementsByClassName("elfjS").item(2));
//     console.log(document.getElementsByClassName("elfjS").item(3));
//     console.log('1');
// }

let problem_text = '';

let current_code = '';

let button = null;

window.addEventListener("load", function(event) {
    


    // 添加一个button
    button = document.createElement('button');
    // 应用样式
    button.style.backgroundColor = '#333';
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.padding = '0px 10px';
    button.style.textAlign = 'center';
    button.style.textDecoration = 'none';
    button.style.display = 'inline-block';
    button.style.fontSize = '12px';
    button.style.margin = '0px 0px';
    button.style.cursor = 'pointer';
    button.style.borderRadius = '5px';
    button.style.transition = 'background-color 0.3s';


    button.textContent = "I Need Hint!";





    // 添加一个button
    button2 = document.createElement('button');
    // 应用样式
    button2.style.backgroundColor = '#333';
    button2.style.color = 'white';
    button2.style.border = 'none';
    button2.style.padding = '0px 10px';
    button2.style.textAlign = 'center';
    button2.style.textDecoration = 'none';
    button2.style.display = 'inline-block';
    button2.style.fontSize = '12px';
    button2.style.margin = '0px 0px';
    button2.style.cursor = 'pointer';
    button2.style.borderRadius = '5px';
    button2.style.transition = 'background-color 0.3s';


    button2.textContent = "What is Next Step?";

    // document.querySelector('#end').prepend(button);
    button2.addEventListener('click', () => show_next_step());


    setTimeout(function() {
        console.log(document.getElementById('ide-top-btns'));
        document.getElementById('ide-top-btns').prepend(button);
        document.getElementById('ide-top-btns').prepend(button2);
        // button.addEventListener('click', () => get_problem());

        // document.getElementsByClassName("monaco-scrollable-element editor-scrollable vs")[0].innerText = "#Use sorting before checking for pairs.<br>#Iterate through each element in the array using an outer loop.";
        // document.getElementsByClassName("monaco-scrollable-element editor-scrollable vs")[0].isContentEditable = true;
        // isContentEditable
        // : 
        // false

        // document.getElementsByClassName("monaco-scrollable-element editor-scrollable vs")[0].innerText = "def two_sum_mashuai():";
        // document.getElementsByClassName("monaco-scrollable-element editor-scrollable vs")[0].innerHTML = "<div class=\"lines-content monaco-editor-background\" style=\"position: absolute; overflow: hidden; width: 1e+06px; height: 1e+06px; transform: translate3d(0px, 0px, 0px); contain: strict; top: 0px; left: 0px;\"><div class=\"view-overlays\" role=\"presentation\" aria-hidden=\"true\" style=\"position: absolute; height: 0px; width: 654px;\"><div style=\"position:absolute;top:8px;width:100%;height:18px;\"></div><div style=\"position:absolute;top:26px;width:100%;height:18px;\"><div class=\"core-guide core-guide-indent-active vertical\" style=\"left:0px;height:18px;width:7.1484375px\"></div></div><div style=\"position:absolute;top:44px;width:100%;height:18px;\"><div class=\"current-line\" style=\"width:654px; height:18px;\"></div></div><div style=\"position:absolute;top:62px;width:100%;height:18px;\"></div><div style=\"position:absolute;top:80px;width:100%;height:18px;\"></div><div style=\"position:absolute;top:98px;width:100%;height:18px;\"></div></div><div role=\"presentation\" aria-hidden=\"true\" class=\"view-rulers\"></div><div class=\"view-zones\" role=\"presentation\" aria-hidden=\"true\" style=\"position: absolute;\"></div><div class=\"view-lines monaco-mouse-cursor-text\" role=\"presentation\" aria-hidden=\"true\" data-mprt=\"7\" style=\"position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 13px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 18px; letter-spacing: 0px; width: 654px; height: 460px;\"><div style=\"top:8px;height:18px;\" class=\"view-line\"><span><span class=\"mtk4\">def</span><span class=\"mtk1\">&nbsp;</span><span class=\"mtk10\">two_sum</span><span class=\"mtk1\">():</span></span></div><div style=\"top:26px;height:18px;\" class=\"view-line\"><span><span class=\"mtk1\">&nbsp;&nbsp;&nbsp;&nbsp;a&nbsp;=&nbsp;</span><span class=\"mtk7\">1</span></span></div><div style=\"top:44px;height:18px;\" class=\"view-line\"><span><span></span></span></div><div style=\"top:62px;height:18px;\" class=\"view-line\"><span><span></span></span></div><div style=\"top:80px;height:18px;\" class=\"view-line\"><span><span></span></span></div><div style=\"top:98px;height:18px;\" class=\"view-line\"><span><span class=\"mtk1\">&nbsp;&nbsp;&nbsp;&nbsp;</span></span></div></div><div data-mprt=\"1\" class=\"contentWidgets\" style=\"position: absolute; top: 0px;\"></div><div role=\"presentation\" aria-hidden=\"true\" class=\"cursors-layer cursor-line-style cursor-solid\"><div class=\"cursor monaco-mouse-cursor-text \" style=\"height: 18px; top: 44px; left: 0px; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 13px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 18px; letter-spacing: 0px; display: block; visibility: hidden; width: 2px;\"></div></div></div><div role=\"presentation\" aria-hidden=\"true\" class=\"invisible scrollbar horizontal\" style=\"position: absolute; width: 640px; height: 12px; left: 0px; bottom: 0px;\"><div class=\"slider\" style=\"position: absolute; top: 0px; left: 0px; height: 12px; transform: translate3d(0px, 0px, 0px); contain: strict; width: 640px;\"></div></div><canvas class=\"decorationsOverviewRuler\" aria-hidden=\"true\" width=\"14\" height=\"460\" style=\"position: absolute; transform: translate3d(0px, 0px, 0px); contain: strict; top: 0px; right: 0px; width: 14px; height: 460px; display: block;\"></canvas><div role=\"presentation\" aria-hidden=\"true\" class=\"invisible scrollbar vertical\" style=\"position: absolute; width: 14px; height: 460px; right: 0px; top: 0px;\"><div class=\"slider\" style=\"position: absolute; top: 0px; left: 0px; width: 14px; transform: translate3d(0px, 0px, 0px); contain: strict; height: 460px;\"></div></div>";
        


        get_problem();

        get_learner_code();

        send_page_content();

      }, 5000);
    console.log('1');
  });

function get_problem(){
    const text_list = document.getElementsByClassName("elfjS")[0].children;
    for(var i=0; i < text_list.length; i++){
        if (text_list[i].innerHTML == '&nbsp;'){
            break;
        }
        problem_text += ' ';
        problem_text += text_list[i].textContent;
    }
    console.log(problem_text);

    // document.getElementById('problem_content').textContent = problem_text;
}


function send_page_content(){
    chrome.runtime.sendMessage({problem_content: problem_text, learner_code: current_code});
};




function get_learner_code(){
    console.log(document.getElementsByClassName("monaco-scrollable-element editor-scrollable vs"));
    console.log(document.getElementsByClassName("monaco-scrollable-element editor-scrollable vs")[0].innerText);
    current_code = document.getElementsByClassName("monaco-scrollable-element editor-scrollable vs")[0].innerText;
}


function toggleSidebar() {

    
    console.log('content js send');
    
    // 不能每一次都发送打开panel的message，需要判断panel是否当前已经打开了
    // chrome.runtime.sendMessage({ type: 'open_side_panel' });

    get_problem();

    get_learner_code();

    send_page_content();
}


function show_next_step(){
    alert("The next step is:\nnum = i + j");
}


// 在 content-script.js 中
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.greeting) {
        console.log("Message received in content script: " + message.greeting);
        // 这里处理接收到的消息
        // 把注释粘贴到editor里
        // document.getElementsByClassName("monaco-scrollable-element editor-scrollable vs")[0].innerText = document.getElementsByClassName("monaco-scrollable-element editor-scrollable vs")[0].innerText + message.greeting;
    }
});

