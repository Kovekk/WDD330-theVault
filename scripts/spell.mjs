// import { displayPage } from "./view";

// displayPage("api/spells", processSpell, ".spellNonHeaders", spellTemplate, "spellList", spellHeaderTemplate);

export function spellTemplate(data) {
    const description = data.description.join("<br><br>");
    return `<div class="data" data-index="${data.index}">
        <p class="spellLevel">${data.level}</p>
        <p class="spellName">${data.name}</p>
        <p class="spellSchool">${data.school}</p>
        <p class="spellCastTime">${data.castingTime}</p>
        <p class="spellDuration">${data.duration}</p>
        <p class="spellRange">${data.range}</p>
        <p class="spellArea">${data.area}</p>
        <p class="spellAttackSave">${data.attackSave}</p>
    </div>
    <div class="dropdown noDropDown" id="${data.index}">
        <div class="seperator"></div>
        <p class="description">${description}</p>
    </div>`;
}

export function processSpell(data) {
    // Setting up the variables for the if statements below
    let hasAreaOfEffect = " ";
    let hasAttackOrSave = " ";
    // If the spell contains an area of effect set it to the variable
    if (Object.hasOwn(data, "area_of_effect")) {
        hasAreaOfEffect = `${data.area_of_effect.size} ft ${data.area_of_effect.type}`;
    }
    // If the spell contains an attack or dc save set it to the variable
    if (Object.hasOwn(data, "dc")) {
        hasAttackOrSave = data.dc.dc_type.name;
    } else if (Object.hasOwn(data, "attack_type")) {
        hasAttackOrSave = data.attack_type;
    }
    let newData = {
        level : data.level,
        name : data.name,
        school : data.school.name,
        castingTime : data.casting_time,
        duration : data.duration,
        range : data.range,
        area : hasAreaOfEffect,
        attackSave : hasAttackOrSave,
        description : data.desc,
        index : data.index
    };
    return newData;
}

export function spellHeaderTemplate() {
    return `<div class="manageBtns">
    <h3 class="breadCrumb">Spells</h3>
    <a href="../forms/NewSpell.html" class="addNew">New Spell</a>
    </div>
    <div class="dataList spells">
        <div class="headers">
            <p class="spellLevel">Level</p>
            <p class="spellName">Name</p>
            <p class="spellSchool">School</p>
            <p class="spellCastTime">Casting Time</p>
            <p class="spellDuration">Duration</p>
            <p class="spellRange">Range</p>
            <p class="spellArea">Area</p>
            <p class="spellAttackSave">Attack/Save</p>
        </div>
        <div class="spellNonHeaders">
        </div>
    </div>`;
}

export function formatData() {
    let spellDuration = "";
    let spellRange = "";
    let spellArea = "";
    let spellAttackSave = "";

    const spellDurationMeasurement = document.querySelector("#spellDurationMeasurement");
    if (spellDurationMeasurement.value == "instantaneous" || spellDurationMeasurement.value == "untilDispelled") {
        spellDuration = spellDurationMeasurement.value;
    } else {
        spellDuration = `${document.querySelector("#spellDuration").value} ${spellDurationMeasurement.value}`;
    }


    // If the spell range is ranged then the distance and measurement should be set to the range
    if (document.querySelector("#spellRange") == "ranged") {
        spellRange = `${document.querySelector("#spellRangeDistance").value} ${document.querySelector("#spellRangeDistanceMeasurement").value}`;
    // Otherwise the range should be set to the spellRange option selected.
    } else {
        spellRange = `${document.querySelector("#spellRange").value}`
    }

    // if the spell area number input is 0 than there is no area
    if (document.querySelector("#spellArea").value == 0) {
        spellArea = " ";
        // Otherwise the are should be set to the values in the two area fields.
    } else {
        spellArea = `${document.querySelector("#spellArea").value} ${document.querySelector("#spellAreaMeasurement").value}`;
    }

    if (document.querySelector("#attackSave").value == "none") {
        spellAttackSave = " ";
    } else {
        spellAttackSave = document.querySelector("#attackSave").value;
    }

    // console.log(document.querySelector("spellDescription"));

    let obj = {
        level : document.querySelector("#spellLevel").value,
        name : document.querySelector("#spellName").value,
        school : document.querySelector("#spellSchool").value,
        castingTime : `${document.querySelector("#spellCastTime").value} ${document.querySelector("#spellCastMeasurement").value}`,
        duration : spellDuration,
        range : spellRange,
        area : spellArea,
        attackSave : spellAttackSave,
        // description : ["placeholder 1 and placerholder 2\nplaceholder3 3"],
        description : [document.querySelector("#spellDescription").value],
        index : "s0"
    };
    return obj;
}
