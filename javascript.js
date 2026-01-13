const screen = document.querySelector("#screen");
const screenBtns = document.querySelectorAll(".screenBtn");

const operations = {
    "+": add = (x, y) => x + y,
    "-": subtract = (x, y) => x - y,
    "*": multiply = (x, y) => x * y,
    "/": divide = (x, y) => x / y,
}

screenBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        screen.textContent += btn.textContent;
    });
});