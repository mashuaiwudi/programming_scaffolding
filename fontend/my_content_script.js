

// window.onload = () =>{
//     console.log(document.getElementsByClassName("elfjS"));
//     console.log(document.getElementsByClassName("elfjS")[0]);
//     console.log(document.getElementsByClassName("elfjS").item(1));
//     console.log(document.getElementsByClassName("elfjS").item(2));
//     console.log(document.getElementsByClassName("elfjS").item(3));
//     console.log('1');
// }

let problem_text = '';

window.addEventListener("load", function(event) {
    // console.log(document.getElementsByClassName("flex w-full flex-1 flex-col gap-4 overflow-y-auto px-4 py-5")[0]);
    setTimeout(function() {
        get_problem();
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
    testMessage();
    // document.getElementById('problem_content').textContent = problem_text;
}

// window.onload(testMessage());

function testMessage(){
    chrome.runtime.sendMessage({payloadshuai: problem_text});
};

