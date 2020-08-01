console.log('background running');

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab){
  // prints tab info
  console.log(tab);
  let msg = {
    txt: "open"
  }
  chrome.tabs.sendMessage(tab.id, msg);
}
