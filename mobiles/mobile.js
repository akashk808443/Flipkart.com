import navbar from "../navbar/navbar.js";
let nav = document.querySelector("#nav");
nav.innerHTML = navbar();
import { footer } from "../footer/footer.js";
let foot = document.querySelector("#foot");
foot.innerHTML = footer();

import { Fetch, appendData } from "../fetchAppend/fetchAppend.js";
let parent = document.querySelector("#electronicDiv");
let res = await Fetch(`https://myjson.onrender.com/mobiles`);
appendData(res, parent);

