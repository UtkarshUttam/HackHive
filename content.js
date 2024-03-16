// Function to extract captions
// Function to extract captions
function extractCaptions() {
  // const captionsDiv = document.querySelector('div[jsname="tgaKEf"].iTTPOb.VbkSUe');
  const captionsDiv = document.querySelector('div.iTTPOb.VbkSUe');
  console.log(captionsDiv)
  if (!captionsDiv) return null;

  // Get all child spans within the div
  const spans = captionsDiv.querySelectorAll('span');
  console.log(spans)

  // Combine the text content of all spans into a single string
  let captions = "";
  spans.forEach(span => {
    captions += span.textContent.trim() + " ";
  });

  return captions.trim();
}

// Send extracted captions to the background script
chrome.runtime.sendMessage({ action: "captionsCaptured", captions: extractCaptions() });
