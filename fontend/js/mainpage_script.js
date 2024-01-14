
// chrome.runtime.onMessage.addListener((request, sender) =>{
//     console.log('request', request['payloadshuai']);
//     console.log('sender', sender);
//     console.log(document.getElementById('problem_content2'));
//     document.getElementById('problem_content2').textContent = request['payloadshuai'];
// });

// Listen for messages sent from the sandboxed page

// window.addEventListener("message", (event) => {
//     console.log('I received it!');
//     // Validate the source of the message
//     if (event.source === window && event.data.type && event.data.type === "FROM_SANDBOX") {
//       console.log("Received message from sandbox:", event.data.payloadshuai);

//       console.log(document.getElementById('problem_content2'));
//       document.getElementById('problem_content2').textContent = event.data.payloadshuai;

//     }
//   });

  

// 获取网页中的problem！
// chrome.runtime.onMessage.addListener((request, sender) =>{
//     console.log('request', request['payloadshuai']);
//     document.getElementById('problem_content').textContent = request['payloadshuai'];
//     let message = {
//         problem: request['payloadshuai']
//       };
//       document.getElementById('theFrame').contentWindow.postMessage(message, '*');
// });



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



document.getElementById('step1').addEventListener('click', function () {
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
});


document.getElementById('step2').addEventListener('click', function () {
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
});


document.getElementById('step3').addEventListener('click', function () {
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
});


document.getElementById('step4').addEventListener('click', function () {
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
});