// Function to update the popup UI with captions
function updatePopupUI(captions) {
  const captionsDiv = document.getElementById('captions');
  if (captionsDiv) {
    // Clear the previous content of the captions div
    captionsDiv.innerHTML = "";

    // Create a new paragraph element to display the captions
    const paragraph = document.createElement("p");
    paragraph.textContent = captions || "No captions available";

    // Append the paragraph element to the captions div
    captionsDiv.appendChild(paragraph);
  }
}

// Button click event listeners
document.getElementById('startButton').addEventListener('click', function() {
  console.log("Hi")
  chrome.runtime.sendMessage({ action: "startCapturing" });
});

document.getElementById('stopButton').addEventListener('click', function() {
  chrome.runtime.sendMessage({ action: "stopCapturing" });
});

document.getElementById('downloadButton').addEventListener('click', function() {
  chrome.runtime.sendMessage({ action: "downloadTranscripts" });
});

// Listen for messages from background script
chrome.runtime.onMessage.addListener(function(message) {
  if (message.action === "updatePopup") {
    updatePopupUI(message.captions);
  }
});
