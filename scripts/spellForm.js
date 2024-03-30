import { formatData } from "./Spell.mjs";
import { setLocalStorage } from "./services.mjs";

const form = document.forms["createSpell"];
// console.log(getLocalStorage("monsterList"));
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formJson = formatData();
    // console.log(formJson);
    setLocalStorage("spellList", formJson);
});