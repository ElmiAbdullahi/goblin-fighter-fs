/* Imports */
import { renderGoblin } from './render-utilis.js';
import { getRandomItem } from './fetch-utils.js';

/* Get DOM Elements */

const addGoblinForm = document.getElementById('add-goblin-form');
const playerHP = document.getElementById('player-hp');

const goblinList = document.getElementById('goblin-list');
const removeDeadGoblinsBtn = document.getElementById('remove-dead-goblins');

// const formData = document.getElementById('form-data');

const resultDisplay = document.getElementById('result-display');
const playerCardImg = document.getElementById('display-player');

const damageDone = document.getElementById('damage-done');

/* State */
// let message = '';
let result = '';
let player = { HP: 23 };

let goblins = [
    { name: 'Lex', HP: 7, type: 'red' },
    { name: 'Hamza', HP: 8, type: 'green' },
    { name: 'Tech', HP: 9, type: 'blue' },
];

let defeated = 0;
// let damageTaken = 0;

/* Events */

const green = {
    type: 'green',
    HP: 4,
};
const blue = {
    type: 'blue',
    HP: 5,
};
const red = {
    type: 'red',
    HP: 3,
};
const yellow = {
    type: 'yellow',
    HP: 6,
};

const goblinDamages = [0, 0, 0, 1, 2, 3, 3, 3, 3, 4, 4, 5];
const playerDamages = [0, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 5];
const villianTypes = [green, green, red, red, red, red, red, blue, blue, yellow];

/* Display Functions */
addGoblinForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(addGoblinForm);
    const villianType = getRandomItem(villianTypes);

    const goblin = {
        name: formData.get('name'),
        type: villianType.type,
        HP: villianType.HP,
    };
    goblins.push(goblin);

    result = `${goblin.name} the ${goblin.type} has entered the battle`;
    displayGoblins();
    displayResult();

    addGoblinForm.reset();
});

removeDeadGoblinsBtn.addEventListener('click', () => {
    const alive = [];

    for (const goblin of goblins) {
        if (goblin.HP > 0) alive.push(goblin);
    }
    goblins = alive;
    displayGoblins();
});

function displayDamage() {
    if (goblins.name) {
        damageDone.textContent = `you hit ${goblins.name} and did ${damageDone} damage`;
    } else {
        damageDone.textContent = '';
    }
}
function displayDefeatedGoblin() {
    resultDisplay.textContent = `you have defeated ${defeated} goblins`;
}

function displayPlayer() {
    playerHP.textContent = player.HP;
    if (player.HP < 1) {
        playerCardImg.src = '/assets/tombstone.png';
    } else {
        playerCardImg.src = './assets/superhero.png';
    }
}

function displayResult() {
    resultDisplay.textContent = result;
}
function displayGoblins() {
    goblinList.innerHTML = '';

    for (const goblin of goblins) {
        const goblinEl = renderGoblin(goblin);
        goblinList.append(goblinEl);

        goblinEl.addEventListener('click', () => {
            if (goblin.HP < 1) {
                result = `You're hitting a dead goblin. That's just wrong`;
                displayResult();
                return;
            }
            const playerDamage = getRandomItem(playerDamages);
            const goblinDamage = getRandomItem(goblinDamages);

            player.HP = Math.max(0, player.HP - goblinDamage);
            goblin.HP = Math.max(0, goblin.HP - playerDamage);

            result = '';
            if (playerDamage === 0) {
                result += 'Missed this time. ';
            } else {
                result += `You hit ${goblin.name} and did ${playerDamage} in damage`;
            }
            if (goblinDamage === 0) {
                result += `${goblin.name} missed you`;
            } else {
                result += ` Ooch! ${goblin.name} hit you and did ${goblinDamage} in damage`;
            }

            if (goblin.HP < 1) {
                defeated++;
                displayDefeatedGoblin();
                // displayScoreboard();
            }
            displayResult();
            displayGoblins();
            displayPlayer();
        });
    }
}
displayGoblins();
displayPlayer();
displayDamage();
displayDefeatedGoblin();

// displayScoreboard();
// displayResult();

// (don't forget to call any display functions you want to run on page load!)
