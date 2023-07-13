import navbar from "../navbar/navbar.js";
let nav = document.querySelector("#nav");
nav.innerHTML = navbar();
import { footer } from "../footer/footer.js";
let foot = document.querySelector("#foot");
foot.innerHTML = footer();

document.querySelector("#form").addEventListener("submit", submitFun);

let array = [];
function submitFun(event) {
  event.preventDefault();
  let number = document.querySelector("#input").value;
  function signup(n) {
    this.number = n;
  }
  let obj = new signup(number);
  array.push(obj);
  localStorage.setItem("data", JSON.stringify(array));
  window.location.href = "../signinSignup/Login.html";
}
