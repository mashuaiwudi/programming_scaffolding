

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

    // document.querySelector('#end').prepend(button);
    button.addEventListener('click', () => toggleSidebar());


    setTimeout(function() {
        console.log(document.getElementById('ide-top-btns'));
        document.getElementById('ide-top-btns').prepend(button);
        // button.addEventListener('click', () => get_problem());
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