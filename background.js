// Import OpenAI API wrapper library
const { OpenAI } = require('openai');

// Initialize OpenAI API with your API key
const openai = new OpenAI('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');


let captionsCaptured = "";
console.log("hi from background")
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === "captionsCaptured") {
        captionsCaptured = message.captions;
        console.log("Captions Captured:", captionsCaptured);
        chrome.runtime.sendMessage({ action: "updatePopup", captions: captionsCaptured });
    } else if (message.action === "getCaptions") {
        sendResponse({ captions: captionsCaptured });
    }
});

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === "captionsCaptured") {
        const newCaptions = message.captions;
        captionsCaptured += newCaptions + "\n"; // Append new captions
        chrome.storage.local.set({ "captions": captionsCaptured }); // Store captions permanently
        chrome.runtime.sendMessage({ action: "updatePopup", captions: captionsCaptured });
    } else if (message.action === "getCaptions") {
        sendResponse({ captions: captionsCaptured });
    } else if (message.action === "downloadCaptions") {
        downloadCaptions();
    } else if (message.action === "generateSummaryAndQuiz") {
        generateSummaryAndQuiz(captionsCaptured, sendResponse);
    }
});

function generateSummaryAndQuiz(captions, sendResponse) {
    // Send captions to OpenAI API to generate summary and quiz
    openai.completion.create({
        engine: 'davinci',
        prompt: captions,
        max_tokens: 200,
        stop: ['Q:']
    }).then((response) => {
        const summaryAndQuiz = response.choices[0].text.trim();
        sendResponse({ summaryAndQuiz });
    }).catch((error) => {
        console.error('Error generating summary and quiz:', error);
        sendResponse({ error: 'Error generating summary and quiz' });
    });
}
