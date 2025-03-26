const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(otherLink => {
            otherLink.classList.remove('active');
        });
        link.classList.add('active');
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const sendMessageButtons = document.querySelectorAll(".mentee-overview button");
    sendMessageButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            // Send message logic here
            console.log("Send message button clicked!");
        });
    });
});