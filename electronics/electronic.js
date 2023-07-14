import navbar from "../navbar/navbar.js";
let nav = document.querySelector("#navbar");
nav.innerHTML = navbar();
import { footer, filter } from "../footer/footer.js";
let foot = document.querySelector("#footer");
foot.innerHTML = footer();
let filters = document.querySelector("#FilterDiv");
filters.innerHTML = filter();

import { Fetch, appendData } from "../fetchAppend/fetchAppend.js";
let parent = document.querySelector("#electronicDiv");
let res = await Fetch(`https://myjson.onrender.com/electron`);
appendData(res, parent);
