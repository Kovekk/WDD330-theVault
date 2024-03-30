import { formatData } from "./monster.mjs";
import { setLocalStorage } from "./services.mjs";

const form = document.forms["createMonster"];
// console.log(getLocalStorage("monsterList"));
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formJson = formatData();
    // console.log(formJson);
    setLocalStorage("monsterList", formJson);
});