// popup.js
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('summarizeBtn').addEventListener('click', function() {
        const inputText = document.getElementById('inputText').value;
        summarizeText(inputText);
    });
  });
  
  function summarizeText(text) {
    // Your TextRazor API key
    const apiKey = '3cbf727f6e7a6a324dff96c8845a31e18febe00ce221bd6ea0b26c9c';
  
    // TextRazor API endpoint
    const apiUrl = 'https://api.textrazor.com/topics';
  
    // TextRazor API parameters
    const params = {
        text: text,
        extractors: 'entities',
        apiKey: apiKey
    };
  
    // Construct the request URL with query parameters
    const url = new URL(`${apiUrl}`);
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
  
    // Make a POST request to the TextRazor API
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        console.log("response recieved")
        return response.json();
        
    })
    .then(data => {
        // Extract summary from the API response
        const summary = data.response.entities.map(entity => entity.entityId).join(', ');
        // Update the UI with the summary
        document.getElementById('summary').textContent = summary;
    })
    .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
        document.getElementById('summary').textContent = 'An error occurred while summarizing the text.';
    });
  }
  