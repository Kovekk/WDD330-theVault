// import { displayPage } from "./view.js";

// displayPage("/api/monsters", processMonster, ".monsterNonheaders", monsterTemplate, "monsterList", monsterHeaderTemplate);

export function monsterTemplate(data) {
    return `<div class="data" data-index="${data.index}">
        <p class="monsterCR">${data.cr}</p>
        <p class="monsterName">${data.name}</p>
        <p class="monsterHP">${data.hp}</p>
        <p class="monsterAC">${data.ac}</p>
        <p class="monsterType">${data.type}</p>
        <p class="monsterSize">${data.size}</p>
    </div>
    <div class="dropdown noDropDown" id="${data.index}">
        <div class="seperator"></div>
        <div class="monsterGrid">
            <p class="monstersBaseStatsPTag">Base Stats</p>
            <div class="monstersBaseStats">
                <p><span>Str:</span>${data.str}</p>
                <p><span>Dex:</span>${data.dex}</p>
                <p><span>Con:</span>${data.con}</p>
                <p><span>Wis:</span>${data.wis}</p>
                <p><span>Int:</span>${data.int}</p>
                <p><span>Cha:</span>${data.cha}</p>
            </div>
        </div>
    </div>`;
}

export function processMonster(data) {
    let newData = {
        cr : data.challenge_rating,
        name : data.name,
        hp : data.hit_points,
        ac : data.armor_class[0].value,
        type : data.type,
        size : data.size,
        str : data.strength,
        dex : data.dexterity,
        con : data.constitution,
        wis : data.wisdom,
        int : data.intelligence,
        cha : data.charisma,
        index : data.index
    }; // If I end up with time, I could put in the different types of actions.
       // If I have even more time I could put in the special abilities.

    // console.log(newData);
    return newData;
}

export function monsterHeaderTemplate() {
    return `<div class="manageBtns">
    <h3 class="breadCrumb">Monsters</h3>
    <a href="../forms/NewMonster.html" class="addNew">New Monster</a>
</div>
<div class="dataList monsters">
    <div class="headers">
        <p class="monsterCR">CR</p>
        <p class="monsterName">Name</p>
        <p class="monsterHP">Max HP</p>
        <p class="monsterAC">AC</p>
        <p class="monsterType">Type</p>
        <p class="monsterSize">Size</p>
    </div>
    <div class="monsterNonheaders">
    </div>
</div>`;
}

// For use with the form
export function formatData() {
    // console.log(document.querySelector("#monsterAC").value);
    const obj = {
        cr : document.querySelector("#monsterCR").value,
        name : document.querySelector("#monsterName").value,
        hp : document.querySelector("#monsterHP").value,
        ac : document.querySelector("#monsterAC").value,
        type : document.querySelector("#monsterType").value,
        size : document.querySelector("#monsterSize").value,
        str : document.querySelector("#monsterStr").value,
        dex : document.querySelector("#monsterDex").value,
        con : document.querySelector("#monsterCon").value,
        wis : document.querySelector("#monsterWis").value,
        int : document.querySelector("#monsterInt").value,
        cha : document.querySelector("#monsterCha").value,
        index : "m0"
    };
    return obj;
}
