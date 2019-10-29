import "./styles.css";
// import { calculate } from "./functions";

// 10
const first = document.getElementById("first-input").value;
const sec = document.getElementById("second-input").value;

document.getElementById(
  "multiButton"
).outerHTML = `<input type="button" onClick="multi()" name="multi" id="multiButton" value="Multi" />`;
document.getElementById(
  "divButton"
).outerHTML = `<input type="button" onClick="divide()" name="div" id="divButton" value="Div" />`;

document.getElementById("summary").innerHTML = first * sec;

export function divide() {
  console.log("div");
  // document.getElementById("summary").innerHTML = first / sec;
}

export function multi() {
  console.log("mult");
  // document.getElementById("summary").innerHTML = first * sec;
}
