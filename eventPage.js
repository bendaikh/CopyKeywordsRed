chrome.browserAction.onClicked.addListener(buttonClicked);
function buttonClicked(tab){
    let msg = {
        txt: "copy products keywords on Redbubble"
    }
    chrome.tabs.sendMessage(tab.id, msg);
}