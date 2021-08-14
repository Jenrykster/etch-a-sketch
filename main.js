const main_container = document.querySelector('main');

let gridContainer = document.createElement('div');

gridContainer.classList.add('grid-container');


main_container.appendChild(gridContainer);

let gridCells = []

function createNewGrid(size){
    if(!size){
        let newGridSize = parseInt(prompt("What's the size of the grid ? (1-50)"));
        console.log(newGridSize)
        while(isNaN(newGridSize)||newGridSize > 50 || newGridSize < 1 ){
            newGridSize = prompt("Please insert a number (1-50)");
        }
        gridSize = newGridSize;
    }else{
        gridSize = size;
    }
        
    while (gridContainer.hasChildNodes()) {
        gridContainer.removeChild(gridContainer.lastChild);
    }

    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, auto)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, auto)`;

    for (let i = 0; i < gridSize * gridSize; i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell')
        gridContainer.appendChild(cell);
        gridCells.push(cell)
    }
    gridCells.forEach((cell) => {
        cell.addEventListener('mouseenter', changeColor);
    })

}
function changeColor(e) {
    let cell = e.target;
    cell.style.backgroundColor = 'black';
}

let button = document.querySelector('#clear-button');

function clearGrid(e){
    gridCells.forEach((cell)=>{
        cell.style.backgroundColor = "transparent"
    })
    createNewGrid()
}
button.addEventListener('click', clearGrid)

createNewGrid(10)