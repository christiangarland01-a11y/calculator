const screen = document.querySelector("#screen");
const numBtns = document.querySelectorAll(".numBtn");
const operatorBtns = document.querySelectorAll(".operatorBtn");
const equalBtn = document.querySelector("#equalBtn");
const decimalBtn = document.querySelector("#decimalBtn");
const delBtn = document.querySelector("#delBtn");

let isAnswer = false;
let num = "";
let equation = [];

const equations = {
    "+": add = (x, y) => x + y,
    "-": subtract = (x, y) => x - y,
    "*": multiply = (x, y) => x * y,
    "/": divide = (x, y) => y === 0 ? "BOOM!" : x / y,
};

function roundTo(num, precision) {
  const factor = Math.pow(10, precision)
  return Math.round(num * factor) / factor
};

const operate = (x, mathSym, y) => {
    return !y ? x : roundTo(equations[mathSym](x, y), 2);
};

const addNum = (btnVal) => {
    if (isAnswer) {
        reset();
    };
    
    if (!num) {
        num = 
            btnVal === "." ? 
            "0." : 
            btnVal;
    } else {
        num += btnVal;
    };

    !equation[1] ? equation[0] = num : equation[2] = num;
    updateScreen();
};

const addOperator = (btnVal) => {
    if(equation.length === 1) {
        if(isAnswer){
            isAnswer = false;
        }
        equation.push(btnVal);
        updateScreen();
        num = ""; 
    } else {
        return
    }
}

const updateScreen = () => {
    screen.textContent = equation.join(" ");
}

const reset = () => {
    num = "";
    equation = [];
    isAnswer = false;
    screen.textContent = "";
}

numBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        addNum(e.target.textContent);
    })
});

decimalBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (num.includes(".")) {
        return;
    } else {
        addNum(e.target.textContent);
    }
})

operatorBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        addOperator(e.target.textContent);
    })
});

equalBtn.addEventListener("click", () => {
    screen.textContent = operate(parseFloat(equation[0]), equation[1], parseFloat(equation[2]));
    equation.splice(0, 3, screen.textContent);
    isAnswer = true;
})

delBtn.addEventListener("click", reset);