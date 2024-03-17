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
