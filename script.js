const input = document.getElementById("input");
const clearBtn = document.getElementById("clear");
const backSpace = document.getElementById("backspace");
const equalBtn = document.getElementById("equal");

function calcNumber(number){
    input.value += number;
}

equalBtn.onclick = () => {
    input.value = eval(input.value);
}

clearBtn.onclick = () => {
    input.value = "";
}

backSpace.onclick = () => {
    input.value = input.value.slice(0, -1);
}