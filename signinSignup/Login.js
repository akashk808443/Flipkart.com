import navbar from "../navbar/navbar.js";
let nav = document.querySelector("#nav");
nav.innerHTML = navbar();
import { footer } from "../footer/footer.js";
let foot = document.querySelector("#foot");
foot.innerHTML = footer();

let array = JSON.parse(localStorage.getItem("data"));

document.querySelector("#form").addEventListener("submit", loginFun);
function loginFun(event) {
  event.preventDefault();
  let number = document.querySelector("#input").value;

  for (let i = 0; i < array.length; i++) {
    if (number === array[i].number) {
      alert("Login success");
      window.location.href = "../otppage/otp.html";
    } else {
      alert("invalid input");
    }
  }
}
