"use strict";
const number1 = document.getElementById("num1");
const number2 = document.getElementById("num2");
const buttonElement = document.querySelector("button");
const numResults = [];
const textResults = [];
function add(num1, num2) {
    if (typeof num1 == "number" && typeof num2 == "number") {
        return num1 + num2;
    }
    else if (typeof num1 == "string" && typeof num2 == "string") {
        return num1 + " " + num2;
    }
    return +num1 + +num2;
}
function printResult(resultobj) {
    console.log(resultobj.val);
}
buttonElement === null || buttonElement === void 0 ? void 0 : buttonElement.addEventListener("click", function () {
    const num1 = number1.value;
    const num2 = number2.value;
    const result = add(+num1, +num2);
    numResults.push(result);
    const stringResult = add(+num1, +num2);
    console.log(result);
    textResults.push(stringResult);
    printResult({ val: result, timestamp: new Date() });
    console.log(numResults, textResults);
});
const promist = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("it workes");
    }, 1000);
});
promist.then((result) => {
    console.log(result);
});
