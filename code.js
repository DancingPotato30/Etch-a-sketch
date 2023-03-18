/*let gridSizeValue;
let gridDimensions;*/

//Bucket size X, Scoops size Y, Z times.
//Y =X
let grid;
let color;
let gridSize = 16;
let gridDimensions = 500 / gridSize;
const gridContainer = document.querySelector(".gridContainer");
const colorPicker = document.querySelector(".colorPicker");
const gridSizeBtn = document.querySelector(".gridSizeButton");
const clearBtn = document.querySelector(".clear");

colorPicker.addEventListener("change", (e) => {
    color = e.target.value;
    colorPicker.style.backgroundColor = `${color}`;
});
gridSizeBtn.addEventListener("click", () => { 
    gridSize = prompt("Enter grid size");

    if (gridSize > 100 || gridSize < 1) {
        alert("ERROR: Size should be between 1 to 100");
        return;
    }
    gridDimensions = 500 / gridSize;
    clearGrid();
    for (let i = 0; i < (gridSize * gridSize); i++) {
        grid = document.createElement("div");
        grid.className = "grid";
        grid.style.width = `${gridDimensions}px`;
        grid.style.height = `${gridDimensions}px`;
        grid.addEventListener('dragenter', (e) => e.target.style.backgroundColor = `${color}`);
        grid.addEventListener('mousedown', (e) => e.target.style.backgroundColor = `${color}`);
        gridContainer.appendChild(grid);
        
    }
});
clearBtn.addEventListener('click', () => {
    while (gridContainer.firstChild.style.backgroundColor == 'white') {
        gridContainer.lastChild.style.backgroundColor = 'white';
    }
});

color = colorPicker.value;
colorPicker.style.backgroundColor = `${color}`;

//Grid drawer
    for (let i = 0; i < (gridSize * gridSize); i++) {
        grid = document.createElement("div");
        grid.style.width = `${gridDimensions}px`;
        grid.style.height = `${gridDimensions}px`;
        grid.className = "grid";
        grid.addEventListener('dragenter', (e) => e.target.style.backgroundColor = `${color}`);
        grid.addEventListener('mousedown', (e) => e.target.style.backgroundColor = `${color}`);
        gridContainer.appendChild(grid);
    }

function clearGrid() {
    console.log(grid.style.backgroundColor);
}




/*grid.style.width = gridDimensions;
grid.style.height = gridDimensions;s
console.log(gridDimensions);
slider.addEventListener("input", (e) => {
    gridSize.textContent = `${e.target.value}`;
  });
const slider = document.querySelector(".gridSizePicker");
const gridSize = document.querySelector(".gridNum");
gridSizeValue = 500 / e.target.value;
gridDimensions = gridSizeValue * gridSizeValue;*/