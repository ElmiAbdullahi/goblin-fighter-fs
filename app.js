/* Imports */
import { renderGoblin } from './render-utilis.js';
import { getRandomItem } from './fetch-utils.js';

/* Get DOM Elements */

const goblinArea = document.getElementById('goblin-area');

const addGoblinForm = document.getElementById('add-goblin-form');
const playerHP = document.getElementById('player-hp');

const goblinList = document.getElementById('goblin-list');
const removeDeadGoblinsBtn = document.getElementById('remove-dead-goblins');

const defeatGoblin = document.getElementById('defeated-goblins');
const damageDone = document.getElementById('damage-done');

/* State */
let message = '';
let player = { HP: 16 };

let goblins = [
    { name: 'Lex', HP: 0, type: 'ghoul' },
    { name: 'Hamza', HP: 8, type: 'hitter' },
    { name: 'Tech', HP: 9, type: 'brute' },
];

let defeated = 0;
// let damageTaken = 0;

/* Events */
// const damageTaken = [0, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 5];

/* Display Functions */
function displayDamage() {
    if (goblins.name) {
        damageDone.textContent = `you hit ${goblins.name} and did ${damageDone} damage`;
    } else {
        damageDone.textContent = '';
    }
}
function displayDefeatedGoblin() {
    defeatGoblin.textContent = `you have defeated ${defeated} goblins`;
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
