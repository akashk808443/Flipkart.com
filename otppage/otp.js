
import navbar from "../navbar/navbar.js";
let nav = document.querySelector("#nav");
nav.innerHTML = navbar();
import { footer } from "../footer/footer.js";
let foot = document.querySelector("#foot");
foot.innerHTML = footer();

document.querySelector("#form").addEventListener("submit", otpFun);

var otp="1234"
function otpFun (event){
    event.preventDefault();
    let bag="";
    let first=document.querySelector("#first").value;
    let second=document.querySelector("#second").value;
    let third=document.querySelector("#third").value;
    let fourth=document.querySelector("#fourth").value;
    
    bag=bag+first+second+third+fourth;
    console.log(bag)
    if(otp==bag){
        alert ("OTP Verified")
        window.location.href="../home/index.html";
    }
    else{
        alert("Incorrect OTP")
    }

}