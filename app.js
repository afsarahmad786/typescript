var number1 = document.getElementById("num1");
var number2 = document.getElementById("num2");
var buttonElement = document.querySelector("button");
function add(num1, num2) {
    return num1 + num2;
}
buttonElement === null || buttonElement === void 0 ? void 0 : buttonElement.addEventListener("click", function () {
    var num1 = number1.value;
    var num2 = number2.value;
    var result = add(+num1, +num2);
    console.log(result);
});
