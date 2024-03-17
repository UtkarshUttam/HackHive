// Function to extract captions
alert("Hi from Content")
function extractCaptions() {
  const captionsDiv = document.querySelector('div.iTTPOb.VbkSUe');
  if (!captionsDiv) return null;

  // Get all child spans within the div
  const spans = captionsDiv.querySelectorAll('span');

  // Combine the text content of all spans into a single string
  let captions = "";
  spans.forEach(span => {
      captions += span.textContent.trim() + " ";
  });

  return captions.trim();
}

// Send extracted captions to the background script
function sendCaptionsToBackground(captions) {
  chrome.runtime.sendMessage({ action: "captionsCaptured", captions: captions });
}

// Extract captions and send them to the background script
const captions = extractCaptions();
if (captions) {
  sendCaptionsToBackground(captions);
}
