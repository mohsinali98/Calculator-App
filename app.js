function number(num) {
    var screen = document.getElementById("screen");
    screen.value += num;
}

function btnClear() {
    var screen = document.getElementById("screen");
    screen.value = "";
}

function btnEqual() {
    var screen = document.getElementById("screen");
    var result = eval(screen.value);
    screen.value = result;
}

