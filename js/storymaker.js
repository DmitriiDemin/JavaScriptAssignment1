// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors


const nounButton = document.querySelector("#noun1");
const verbButton = document.querySelector("#verb");
const adjectiveButton = document.querySelector("#adjective");
const noun2Button = document.querySelector("#noun2");
const settingButton = document.querySelector("#setting");


// Constants for p tag to display query selectors
const choosenNoun1 = document.querySelector("#choosenNoun1");
const choosenVerb = document.querySelector("#choosenVerb");
const choosenAdjective = document.querySelector("#choosenAdjective");
const choosenNoun2 = document.querySelector("#choosenNoun2");
const choosenSetting = document.querySelector("#choosenSetting");
const story = document.querySelector("#story");
const studentId = document.querySelector("#studentId");


// Constants for final buttons and p tags
const playbackButton = document.querySelector("#playback");
const randomButton = document.querySelector("#random");

// Variables for pre-defined arrays
var nouns = ["The turkey","Mom","Dad","The dog","My teacher","The elephant","The cat"];
var verbs = ["sat on","ate","danced with","saw","doesn't like","kissed"];
var adjectives = ["a funny","a scary","a goofy","a slimy","a barking","a fat"];
var nouns2 = ["goat","monkey","fish","cow","frog","bug","worm"];
var settings = ["on the moon","on the chair","in my spaghetti","in my soup","on the grass","in my shoes"];

// Variables for count to grab array elements
var nounCount = 0;
var verbCount = 0;
var adjectiveCount = 0;
var noun2Count = 0;
var settingCount = 0;

/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    // variable to get array element and displaying it
    // check the position in array and show the according noun
    if (nounCount < nouns.length) {
        choosenNoun1.textContent = nouns[nounCount];
        nounCount++;
    } else {
        nounCount = 0; 
    }
}

function verb_on_click() {
    // check the position in array and show the according verb
    if (verbCount < verbs.length) {
        choosenVerb.textContent = verbs[verbCount];
        verbCount++;
    } else {
        verbCount = 0;
    }
}

function adjective_on_click() {
    // check the position in array and show the according adjective
    if (adjectiveCount < adjectives.length) {
        choosenAdjective.textContent = adjectives[adjectiveCount];
        adjectiveCount++;
    } else {
        adjectiveCount = 0;
    }
}

function noun2_on_click() {
    // check the position in array and show the according noun 2
    if (noun2Count < nouns2.length) {
        choosenNoun2.textContent = nouns2[noun2Count];
        noun2Count++;
    } else {
        noun2Count = 0;
    }
}

function setting_on_click() {
    // check the position in array and show the according setting
    if (settingCount < settings.length) {
        choosenSetting.textContent = settings[settingCount];
        settingCount++;
    } else {
        settingCount = 0;
    }
}

// concatenate the user story and display
function playback_on_click() {
    story.textContent = choosenNoun1.textContent + " " + choosenVerb.textContent + " " + choosenAdjective.textContent + " " + choosenNoun2.textContent + " " + choosenSetting.textContent + "!";
    studentId.textContent = "Dmitrii Demin ID: 200464709";
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
    // create const to hold the random value from array and make a story with it
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun2 = nouns2[Math.floor(Math.random() * nouns2.length)];
    const randomSetting = settings[Math.floor(Math.random() * settings.length)];

    story.textContent = randomNoun + " " + randomVerb + " " + randomAdjective + " " + randomNoun2 + " " + randomSetting + "!";

}

/* Event Listeners
-------------------------------------------------- */
document.addEventListener("DOMContentLoaded", function() {
nounButton.addEventListener("click", noun1_on_click);
verbButton.addEventListener("click",  verb_on_click);
adjectiveButton.addEventListener("click",  adjective_on_click);
noun2Button.addEventListener("click",  noun2_on_click);
settingButton.addEventListener("click",  setting_on_click);
playbackButton.addEventListener("click",  playback_on_click);
randomButton.addEventListener("click", random_on_click);
});