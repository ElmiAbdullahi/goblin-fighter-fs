/* Imports */
import { renderGoblin } from './render-utilis.js';

/* Get DOM Elements */
// const scoreboardSection = document.getElementById('scoreboard');
// const resultSection = document.getElementById('result-display');

const goblinArea = document.getElementById('goblin-area');

// const addGoblinForm = document.getElementById('add-goblin-form');
// const playerHP = document.getElementById('player-hp');

// const goblinList = document.getElementById('goblin-list');
// const removeDeadGoblinsBtn = document.getElementById('remove-dead-goblins');

const defeatGoblin = document.getElementById('defeated-goblins');
const damageDone = document.getElementById('damage-done');

/* State */
// let message = '';
// let player = { HP: 16 };

let goblins = [
    { name: 'Lex', HP: 7, type: 'ghoul' },
    { name: 'Hamza', HP: 8, type: 'hitter' },
    { name: 'Tech', HP: 9, type: 'brute' },
];

/* Events */

/* Display Functions */
function displayDamage() {
    damageDone.textContent = `you hit ${goblins.name} and did ${0} damage`;
}
function displayDefeatedGoblin() {
    defeatGoblin.textContent = `you have defeated ${0} goblins`;
}

function displayGoblins() {
    for (const goblin of goblins) {
        const goblinEl = renderGoblin(goblin);
        goblinArea.append(goblinEl);
    }
}
displayGoblins();
displayDamage();
displayDefeatedGoblin();

// (don't forget to call any display functions you want to run on page load!)
