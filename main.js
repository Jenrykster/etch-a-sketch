const grid_size = 10;
const main_container = document.querySelector('main');

let gridContainer = document.createElement('div');

gridContainer.classList.add('grid-container');
gridContainer.style.gridTemplateColumns = `repeat(${grid_size}, auto`;
gridContainer.style.gridTemplateRows = `repeat(${grid_size}, auto`;;

main_container.appendChild(gridContainer);

let gridCells = []

function changeColor(e) {
    let cell = e.target;
    cell.style.backgroundColor = 'black';
}
for (let i = 0; i < grid_size * grid_size; i++) {
    let cell = document.createElement('div');
    cell.classList.add('cell')
    gridContainer.appendChild(cell);
    gridCells.push(cell)
}

gridCells.forEach((cell) => {
    cell.addEventListener('mouseenter', changeColor);
})

