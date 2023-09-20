const messages = [
   "How was your day?👀 ",
   "Gimana nihh ulangan hari terakhirnya?",
   "Hopefully the results are satisfactory 💯 ",
];

const messageElement = document.querySelector(".message");
const changeMessageButton = document.querySelector("#change-message");

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)];
}

changeMessageButton.addEventListener("click", function () {
    const randomMessage = getRandomMessage();
    messageElement.textContent = randomMessage;
});


