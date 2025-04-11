const promptForm = document.querySelector(".prompt-form");
const promptInput = promptForm.querySelector(".prompt-input");

let userMessage = "",

// Function to create message elements
const createMsgElement = (content, className) => {
    const div = document.createElement("div");
    div.classList.add("message", className);
    div.innerHTML = content;
    return div;
}

// Handle the form submistion
const handleFormSubmit = (e) => {
    e.preventDefault();
    userMessage = promptInput.value.trim()
    if(!userMessage) return;

    const userMsgHtml = `<p class="message-text"></p>`;
    const userMsgDiv = createMsgElement(userMsgHtml, "user-message");
}

promptForm.addEventListener("submit", handleFormSubmit);