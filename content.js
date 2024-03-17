// Function to extract captions
function extractCaptions() {
  const captionsDiv = document.querySelector('div.iTTPOb.VbkSUe');
  console.log(captionsDiv) // Log the captionsDiv element (for debugging)
  if (!captionsDiv) return null;

  // Get all child spans within the div
  const spans = captionsDiv.querySelectorAll('span');
  console.log(spans) // Log the spans NodeList (for debugging)

  // Combine the text content of all spans into a single string
  let captions = "";
  spans.forEach(span => {
    captions += span.textContent.trim() + " ";
  });

  return captions.trim();
}

// Call extractCaptions function whenever you want to update the captions
// extractCaptions();
chrome.runtime.sendMessage({ action: "captionsCaptured", captions: extractCaptions() });
