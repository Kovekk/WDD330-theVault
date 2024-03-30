import { getData, getLocalStorage, getParam } from "./services.mjs";
import { processMonster, monsterTemplate, monsterHeaderTemplate } from "./monster.mjs";
import { processMagicItem, magicItemTemplate, magicItemHeaderTemplate } from "./magicItem.mjs";
import { processSpell, spellTemplate, spellHeaderTemplate } from "./Spell.mjs";

export async function displayPage(url, processorFn, elemSelector, templateFn, key, headerTemplate) {
    const data = await getData(url);
    const list = await Promise.all(data.map(async (data) => {
        const url = data.url;
        const singleData = await getData(url, "single");
        const object = processorFn(singleData);
        return object;
    }));

    document.querySelector("#main").insertAdjacentHTML("afterbegin", headerTemplate())
    const element = document.querySelector(elemSelector);
    displayTemplateList(templateFn, list, element);
    showlocalStorageItems(key, elemSelector, templateFn);
    const elementList = document.querySelectorAll(".data");
    elementList.forEach(setClickEvent);
}

export function showlocalStorageItems(key, elemSelector, templateFn) {
    const jsonList = getLocalStorage(key);
    if (jsonList != null) {
        const element = document.querySelector(elemSelector);
        displayTemplateList(templateFn, jsonList, element);
    }
}

export function displayTemplateList(templateFn, dataList, parentElement) {
    const htmlString = dataList.map(templateFn).join("");
    parentElement.insertAdjacentHTML("afterbegin", htmlString);
}

function setClickEvent(element) {
    element.addEventListener("click", (e) => {
        // console.log(element.getAttribute("data-index"));
        const index = element.getAttribute("data-index");
        element.classList.toggle("dropDownActive");
        document.querySelector(`#${index}`).classList.toggle("noDropDown");

    });
}

if (getParam("category") == "monsters") {
    displayPage("/api/monsters", processMonster, ".monsterNonheaders", monsterTemplate, "monsterList", monsterHeaderTemplate);
} else if (getParam("category") == "magicItems") {
    displayPage("/api/magic-items", processMagicItem, ".magicItemsNonHeaders", magicItemTemplate, "magicItemList", magicItemHeaderTemplate);
} else if (getParam("category") == "spells") {
    displayPage("/api/spells", processSpell, ".spellNonHeaders", spellTemplate, "spellList", spellHeaderTemplate);
}