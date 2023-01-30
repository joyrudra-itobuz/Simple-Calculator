import "../scss/app.scss";

/* Your JS Code goes here */

/* Demo JS */
import "./demo.js";
// document.querySelector(".seven").textContent;
// console.log(document.getElementsByClassName(".seven").textContent)
console.log("Starts!");

// document.querySelector(".display").value = 7;
document.querySelector(".one").addEventListener("click", function () {
  document.querySelector(".display").value += "1";
});
document.querySelector(".two").addEventListener("click", function () {
  document.querySelector(".display").value += "2";
});
document.querySelector(".three").addEventListener("click", function () {
  ˍ;
  document.querySelector(".display").value += "3";
});
document.querySelector(".four").addEventListener("click", function () {
  document.querySelector(".display").value += "4";
});
document.querySelector(".five").addEventListener("click", function () {
  document.querySelector(".display").value += "5";
});
document.querySelector(".six").addEventListener("click", function () {
  document.querySelector(".display").value += "6";
});
document.querySelector(".seven").addEventListener("click", function () {
  document.querySelector(".display").value += "7";
});
document.querySelector(".eight").addEventListener("click", function () {
  document.querySelector(".display").value += "8";
});
document.querySelector(".nine").addEventListener("click", function () {
  document.querySelector(".display").value += "9";
});
document.querySelector(".zero").addEventListener("click", function () {
  document.querySelector(".display").value += "0";
});
document.querySelector(".add").addEventListener("click", function () {
  document.querySelector(".display").value += "+";
});
document.querySelector(".subtract").addEventListener("click", function () {
  document.querySelector(".display").value += "-";
});

document.querySelector(".multiply").addEventListener("click", function () {
  document.querySelector(".display").value += "*";
});

document.querySelector(".division").addEventListener("click", function () {
  document.querySelector(".display").value += "/";
});

document.querySelector(".clear").addEventListener("click", function () {
  document.querySelector(".display").value += "";
});

console.log("Working Till Input!");

document.querySelector(".equals").addEventListener("click", function () {
  let input = document.querySelector(".display").value;
  if (input == undefined) {
    console.log(input);
    document.querySelector(".display").value = "Please Enter A Valid Math";
  }
  console.log(input);
  let result = eval(input);
  console.log(result);
  document.querySelector(".display").value = result;
});

document.querySelector(".clear").addEventListener("click", function () {
  document.querySelector(".display").value = "";
});

document.querySelector(".equals").addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.querySelector(".equals").click();
  }
});
