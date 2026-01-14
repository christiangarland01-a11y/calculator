const screen = document.querySelector("#screen");
const screenBtns = document.querySelectorAll(".screenBtn");
const mathBtns = document.querySelectorAll(".mathBtn");
const equalBtn = document.querySelector("#equalBtn");
const decimalBtn = document.querySelector("#decimalBtn");
const delBtn = document.querySelector("#delBtn");

const equations = {
    "+": add = (x, y) => x + y,
    "-": subtract = (x, y) => x - y,
    "*": multiply = (x, y) => x * y,
    "/": divide = (x, y) => x / y,
}

const operate = (x, mathSym, y) => {
    return equations[mathSym](x, y);
}

delBtn.addEventListener("click", () => screen.textContent = "");

screenBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        screen.textContent += btn.textContent;
    });
});

mathBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        screen.textContent += ` ${btn.textContent} `;
    })
})

equalBtn.addEventListener("click", () => {
    const equation = screen.textContent.split(" ");
    const answer = operate(parseInt(equation[0]), equation[1], parseInt(equation[2]));
    screen.textContent = answer;
})