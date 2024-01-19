chrome.sidePanel
 .setPanelBehavior({openPanelOnActionClick: true})
 .catch((error) => console.error(error));


// //  chrome.runtime.onMessage.addListener((request, sender) =>{
// //     console.log('request', request);
// //     console.log('sender', sender);
// // });


chrome.runtime.onMessage.addListener((message, sender) => {
    // The callback for runtime.onMessage must return falsy if we're not sending a response
    (async () => {
      if (message.type === 'open_side_panel') {
        // This will open a tab-specific side panel only on the current tab.
        await chrome.sidePanel.open({ tabId: sender.tab.id });
        await chrome.sidePanel.setOptions({
          tabId: sender.tab.id,
          path: 'mainpage.html',
          enabled: true
        });
      }
    })();
  });


// 在 service-worker.js 中
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.greeting) {
    console.log('received');
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, message);
      });
  }
});
