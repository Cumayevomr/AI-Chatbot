const chatsContainer = document.querySelector(".chats-container");
const promptForm = document.querySelector(".prompt-form");
const promptInput = promptForm.querySelector(".prompt-input");

let userMessage = "";

// Function to create message elements
const createMsgElement = (content, ...classes) => {
    const div = document.createElement("div");
    div.classList.add("message", ...classes);
    div.innerHTML = content;
    return div;
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
        // Generate bot message HTML and add in the chats container in 600ms
    const botMsgHtml = `<img src="https://brandlogo.org/wp-content/uploads/2024/06/Gemini-Icon-300x300.png.webp" alt="avatar"><p class="message-text">Just a sec..</p>`;
    const botMsgDiv = createMsgElement(botMsgHtml, "bot-message", "loading");
    chatsContainer.appendChild(botMsgDiv);
    }, 600);
}

promptForm.addEventListener("submit", handleFormSubmit);