const screen = document.querySelector("#screen");
const screenBtns = document.querySelectorAll(".screenBtn");
const mathBtns = document.querySelectorAll(".mathBtn");
const equalBtn = document.querySelector("#equalBtn");
const decimalBtn = document.querySelector("#decimalBtn");
const delBtn = document.querySelector("#delBtn");

let isAnswer = false;
let num1 = null;
let num2 = null;
let operator = null;

const equations = {
    "+": add = (x, y) => x + y,
    "-": subtract = (x, y) => x - y,
    "*": multiply = (x, y) => x * y,
    "/": divide = (x, y) => y === 0 ? "BOOOM!" : x / y,
}

const operate = (x, mathSym, y) => {
    return equations[mathSym](x, y);
}

const extractEquation = (str) => {
    let equation = str.split(" ");
    equation[0] ? num1 = parseInt(equation[0]) : null;
    equation[1] ? operator = equation[1] : null;
    equation[2] ? num2 = parseInt(equation[2]) : null;
}

delBtn.addEventListener("click", () => screen.textContent = "");

screenBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        if (isAnswer) {
            screen.textContent = btn.textContent;
            isAnswer = !isAnswer;
        } else {
            screen.textContent += btn.textContent;
        };
    });
});

mathBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        screen.textContent += ` ${btn.textContent} `;
        isAnswer = false;
    })
})

equalBtn.addEventListener("click", () => {
    extractEquation(screen.textContent);
    screen.textContent = operate(num1, operator, num2);
    isAnswer = true;
})