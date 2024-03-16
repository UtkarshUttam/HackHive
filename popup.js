// Function to update the popup UI with captions
function updatePopupUI(captions) {
    const captionsDiv = document.getElementById('captions');
    if (captionsDiv) {
      captionsDiv.textContent = captions || "No captions available";
    }
  }
  
  // Listen for messages from background script
  chrome.runtime.onMessage.addListener(function(message) {
    if (message.action === "updatePopup") {
      updatePopupUI(message.captions);
    }
  });
  
  // Fetch initial captions (if any) on popup load
      