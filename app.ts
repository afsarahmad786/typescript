const number1 = document.getElementById("num1") as HTMLInputElement;
const number2 = document.getElementById("num2") as HTMLInputElement;
const buttonElement = document.querySelector("button")!;
const numResults: Array<number> = [];
const textResults: string[] = [];
type numorString = number | string;
type Result = { val: number; timestamp: Date };
interface ResultObj {
  val: number;
  timestamp: Date;
}
function add(num1: numorString, num2: numorString) {
  if (typeof num1 == "number" && typeof num2 == "number") {
    return num1 + num2;
  } else if (typeof num1 == "string" && typeof num2 == "string") {
    return num1 + " " + num2;
  }
  return +num1 + +num2;
}

function printResult(resultobj: ResultObj) {
  console.log(resultobj.val);
}

buttonElement?.addEventListener("click", function () {
  const num1 = number1.value;
  const num2 = number2.value;
  const result = add(+num1, +num2);
  numResults.push(result as number);
  const stringResult = add(+num1, +num2);

  console.log(result);
  textResults.push(stringResult as string);
  printResult({ val: result as number, timestamp: new Date() });
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
