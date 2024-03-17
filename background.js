let captionsCaptured = "";
console.log("hi from background")
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === "captionsCaptured") {
        captionsCaptured = message.captions;
        console.log("Captions Captured:", captionsCaptured);
        chrome.runtime.sendMessage({ action: "updatePopup", captions: captionsCaptured });
    } else if (message.action === "getCaptions") {
        sendResponse({ captions: captionsCaptured });
    }
});
