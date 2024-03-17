let captionsCaptured = ""; // Variable to store captions
console.log("background page loaded")
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "captionsCaptured") {
    captionsCaptured = message.captions; // Store received captions
    console.log("Captions Captured:", captionsCaptured);
    chrome.runtime.sendMessage({ action: "updatePopup", captions: captionsCaptured }); // Send to popup for update
  } else if (message.action === "getCaptions") {
    sendResponse({ captions: captionsCaptured });
  }
});
