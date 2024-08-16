let colorPicker = document.getElementById("colorPickerContainer");
let hexCode = document.getElementById("selectedColorHexCode");

function buttonOne() {
    colorPicker.style.background = "#e0e0e0";
    hexCode.textContent = "#e0e0e0";
}

function buttonTwo() {
    colorPicker.style.background = "#6fcf97";
    hexCode.textContent = "#6fcf97";
}

function buttonThree() {
    colorPicker.style.background = "#56ccf2";
    hexCode.textContent = "#56ccf2";
}

function buttonFour() {
    colorPicker.style.background = "#bb6bd9";
    hexCode.textContent = "#bb6bd9";
}
