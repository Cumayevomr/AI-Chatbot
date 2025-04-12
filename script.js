const chatsContainer = document.querySelector(".chats-container");
const promptForm = document.querySelector(".prompt-form");
const promptInput = promptForm.querySelector(".prompt-input");

// API Setup
const API_KEY = "AIzaSyAejtOFjizDmzDcaXZj5bkUbVQS5djkWew";
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

let userMessage = "";
const chatHistory = [];

// Function to create message elements
const createMsgElement = (content, ...classes) => {
    const div = document.createElement("div");
    div.classList.add("message", ...classes);
    div.innerHTML = content;
    return div;
}

const generateResponse = async () => {
    // Add user message to the chat history
    chatHistory.push({
        role: "user",
        parts: [{ text: userMessage }]
    });


    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify()
        });
    } catch {

    }
}

// Handle the form submistion
const handleFormSubmit = (e) => {
    e.preventDefault();
    userMessage = promptInput.value.trim();
    if(!userMessage) return;

    promptInput.value = "";

    // Generate user message HTML and add in the chats container
    const userMsgHtml = `<p class="message-text"></p>`;
    const userMsgDiv = createMsgElement(userMsgHtml, "user-message");

    userMsgDiv.querySelector(".message-text").textContent = userMessage;
    chatsContainer.appendChild(userMsgDiv);

    setTimeout(() => {
        // Generate bot message HTML and add in the chats container after 600ms
    const botMsgHtml = `<img src="https://brandlogo.org/wp-content/uploads/2024/06/Gemini-Icon-300x300.png.webp" alt="avatar"><p class="message-text">Just a sec..</p>`;
    const botMsgDiv = createMsgElement(botMsgHtml, "bot-message", "loading");
    chatsContainer.appendChild(botMsgDiv);
    generateResponse();
    }, 600);
}

promptForm.addEventListener("submit", handleFormSubmit);