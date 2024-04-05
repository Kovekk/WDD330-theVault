import { formatData } from "./magicItem.mjs";
import { setLocalStorage, changeWindowLocation } from "./services.mjs";

const form = document.forms["createMagicItem"];
// console.log(getLocalStorage("monsterList"));
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formJson = formatData();
    // console.log(formJson);
    setLocalStorage("magicItemList", formJson);
    changeWindowLocation("../forms/formCompleted.html?category=magicItem", "magicItem");
});