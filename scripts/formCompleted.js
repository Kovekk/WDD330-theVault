import { getParam } from "./services.mjs";

const category = getParam("category");
const span1 = document.querySelector("#item1");
const span2 = document.querySelector("#item2");

span1.innerHTML = category;
span2.innerHTML = category;

const listReturn = document.querySelector("#listReturn");
const createNew = document.querySelector("#createNew");

listReturn.setAttribute("href", `../list/index.html?category=${category}s`);
createNew.setAttribute("href", `../forms/new${(category.charAt(0).toUpperCase()) + (category.slice(1))}.html`);