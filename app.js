/* Imports */

/* Get DOM Elements */
const scoreboardSection = document.getElementById('scoreboard');
const resultSection = document.getElementById('result-display');

const addGoblinForm = document.getElementById('add-goblin-form');
const playerHP = document.getElementById('player-hp');

/* State */
let message = '';

let goblins = [
    { name: Lex, HP: 7 },
    { name: Hamza, HP: 8 },
    { name: Tech, HP: 9 },
];

/* Events */

/* Display Functions */
function displayGoblinHP() {}
function displayMessage() {
    // took 3 damage and defeat
}
function displayPlayerHP() {}
displayMessage();
displayGoblinHP();
displayPlayerHP();

// (don't forget to call any display functions you want to run on page load!)
