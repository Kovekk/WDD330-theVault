import { formatData } from "./spell.mjs";
import { setLocalStorage, changeWindowLocation } from "./services.mjs";

const form = document.forms["createSpell"];
// console.log(getLocalStorage("monsterList"));
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formJson = formatData();
    console.log(formJson);
    setLocalStorage("spellList", formJson);
    changeWindowLocation("../forms/formCompleted.html?category=spell", "spell");
});

const spellDurationMeasurement = document.querySelector("#spellDurationMeasurement");
const spellDuration = document.querySelector("#spellDuration");
spellDurationMeasurement.addEventListener("change", () => {
    if (spellDurationMeasurement.value == "Instantaneous" || spellDurationMeasurement.value == "Until Dispelled") {
        if (spellDuration.required == true) {
            spellDuration.required = false;
            spellDuration.disabled = true;
        }
    } else {
        if (spellDuration.required == false) {
            spellDuration.required = true;
            spellDuration.disabled = false;
        }
    }
});

const spellRange = document.querySelector("#spellRange");
const spellRangeDistance = document.querySelector("#spellRangeDistance");
const spellDistanceMeasurement = document.querySelector("#spellRangeDistanceMeasurement");
spellRange.addEventListener("change", () => {
    if (spellRange.value == "Ranged") {
        if (spellRangeDistance.required == false) {
            spellRangeDistance.required = true;
            spellRangeDistance.disabled = false;
            spellDistanceMeasurement.disabled = false;
        } 
    } else {
        if (spellRangeDistance.required == true) {
            spellRangeDistance.required = false;
            spellRangeDistance.disabled = true;
            spellDistanceMeasurement.disabled = true;
        }
    }
});

const spellArea = document.querySelector("#spellArea");
const spellAreaMeasurement = document.querySelector("#spellAreaMeasurement");
spellArea.addEventListener("change", () => {
    if (spellArea.value == "0") {
        spellAreaMeasurement.disabled = true;
    } else {
        spellAreaMeasurement.disabled = false;
    }
});

document.querySelector("#hideSidebar").addEventListener("click", hideSidebar);
function hideSidebar() {
    console.log("hello");
    document.querySelector(".sidebar").style.width = "0px";
}