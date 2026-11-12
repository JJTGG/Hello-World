const helloButton = document.getElementById("helloButton");
const message = document.getElementById("message");

helloButton.addEventListener("click", function () {
    message.textContent = "Hello! Welcome to my first website.";
    helloButton.textContent = "Hello Sent!";
});