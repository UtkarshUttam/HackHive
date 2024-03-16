// background.js

// Example: Register a listener for the 'onInstalled' event
chrome.runtime.onInstalled.addListener(function() {
    console.log('Extension installed!');
});

// Example: Register a listener for the 'onMessage' event
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    console.log('Message received:', message);
    // Handle the message or send a response back
});

// Add any other event listeners or functions here as needed
