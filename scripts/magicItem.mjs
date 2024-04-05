// import { displayList} from "./utility.mjs";

// displayList("/api/magic-items", processMagicItem, ".magicItemsNonHeaders", magicItemTemplate, "magicItemList", magicItemHeaderTemplate);

export function magicItemTemplate(data) {
    return `<div class="data" data-index="${data.index}">
        <p class="itemName">${data.name}</p>
        <p class="itemType">${data.type}</p>
        <p class="itemRarity">${data.rarity}</p>
        <p class="itemAttunement">${data.attunement}</p>
    </div>
    <div class="dropdown noDropDown" id="${data.index}">
        <div class="seperator"></div>
        <p class="description">Some kind of description here!</p>
    </div>`;
}

export function processMagicItem(data) {
    // Grabs the first line in the description of a magic item. If that line
    // contains the words "requires attunement" then needsAttunement will be
    // set to true. If it doesn't, it will return false. 
    const firstDescLine = data.desc[0];
    let needsAttunement = " ";
    if (firstDescLine.includes("requires attunement")) {
        needsAttunement = "Yes";
    }
    // const needsAttunement = firstDescLine.includes("requires attunement");
    let newData = {
        name : data.name,
        type : data.equipment_category.name,
        rarity : data.rarity.name,
        attunement : needsAttunement,
        description : data.desc,
        index : data.index
    }
    return newData;
}

export function magicItemHeaderTemplate() {
    return `<div class="manageBtns">
        <h3 class="breadCrumb">Magic Items</h3>
        <a href="../forms/NewMagicItem.html" class="addNew">New Magic Item</a>
    </div>
    <div class="dataList magicItems">
        <div class="headers">
            <p class="itemName">Name</p>
            <p class="itemType">Type</p>
            <p class="itemRarity">Rarity</p>
            <p class="itemAttunement">Attunement?</p>
        </div>
        <div class="magicItemsNonHeaders">
        </div>
    </div>`;
}

export function formatData() {
    let obj = {
        name : document.querySelector("#itemName").value,
        type : document.querySelector("#itemType").value,
        rarity : document.querySelector("#itemRarity").value,
        attunement : document.querySelector("#itemAttunement").value,
        description : document.querySelector("#itemDescription").value,
        index : "i0"
    }
    return obj;
}
