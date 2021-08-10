const grid_size = 10;
const main_container = document.querySelector('main');

let gridContainer = document.createElement('div');

gridContainer.classList.add('grid-container');
gridContainer.style.gridTemplateColumns = `repeat(${grid_size}, auto`;
gridContainer.style.gridTemplateRows = `repeat(${grid_size}, auto`;;

main_container.appendChild(gridContainer);
for(let i = 0; i < grid_size * grid_size; i++){
    let cell = document.createElement('div');
    cell.classList.add('cell')
    gridContainer.appendChild(cell);
}