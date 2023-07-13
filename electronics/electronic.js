import navbar from "../navbar/navbar.js";
let nav = document.querySelector("#nav");
nav.innerHTML = navbar();
import { footer, filter } from "../footer/footer.js";
let foot = document.querySelector("#foot");
foot.innerHTML = footer();
let filters = document.querySelector("#filters");
filters.innerHTML = filter();

import { Fetch, appendData } from "../fetchAppend/fetchAppend.js";
let parent = document.querySelector("#electronicDiv");
let res = await Fetch(`https://myjson.onrender.com/electron`);
appendData(res, parent);
