let capturing = true; // Flag to control capturing

// Function to extract captions
function extractCaptions() {
    const captionsDiv = document.querySelector('div.iTTPOb.VbkSUe');
    if (!captionsDiv) return null;
    alert("HEEEEEEEEEEEEEEE")

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

// Function to continuously extract captions and send them to the background script
function continuouslyExtractCaptions() {
    const captions = extractCaptions();
    if (captions) {
        sendCaptionsToBackground(captions);
    }

    // If capturing flag is true, continue extracting captions
    if (capturing) {
        // Wait for a short interval before extracting captions again
        setTimeout(continuouslyExtractCaptions, 1000); // Adjust the interval as needed
    }
}

// Start continuously extracting captions
continuouslyExtractCaptions();

// Listen for messages from the background script to control capturing
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === "stopCapturing") {
        capturing = false; // Stop capturing when stop message received
    }
});
