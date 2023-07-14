import navbar from "../navbar/navbar.js";
let nav = document.querySelector("#navbar");
nav.innerHTML = navbar();
import { footer, filter } from "../footer/footer.js";
let foot = document.querySelector("#footer");
foot.innerHTML = footer();
let filters = document.querySelector("#FilterDiv");
filters.innerHTML = filter();

import { Fetch, appendData2 } from "../fetchAppend/fetchAppend.js";
let parent = document.querySelector("#furnitureDiv");
let res = await Fetch(`https://myjson.onrender.com/chairs`);
appendData2(res, parent);
