export function renderGoblin(goblin) {
    const goblinContainer = document.createElement('div');

    const nameEl = document.createElement('p');
    nameEl.textContent = goblin.name;

    const hpEl = document.createElement('p');
    hpEl.textContent = goblin.HP;

    const imgEl = document.createElement('img');
    imgEl.src = `/assets/${goblin.type}.png`;

    goblinContainer.append(nameEl, hpEl, imgEl);

    return goblinContainer;
}
