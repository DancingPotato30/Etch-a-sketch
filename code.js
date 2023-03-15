/*let gridSizeValue;
let gridDimensions;*/

//Bucket size X, Scoops size Y, Z times.
//Y =X
let grid;
let color;
let gridSize;
const gridContainer = document.querySelector(".gridContainer");
const colorPicker = document.querySelector(".colorPicker");
const gridSizeBtn = document.querySelector(".gridSizeButton");

colorPicker.addEventListener("change", (e) => {
    color = e.target.value;
    colorPicker.style.backgroundColor = `${color}`;
});
gridSizeBtn.addEventListener("click", () => { 
    gridSize = prompt("Enter grid size")
});

color = colorPicker.value;
colorPicker.style.backgroundColor = `${color}`;

//Grid drawer
for (let i = 0; i < (16 * 16); i++) {
    grid = document.createElement("div");
    grid.className = "grid";
    grid.addEventListener('dragenter', (e) => e.target.style.backgroundColor = `${color}`);
    grid.addEventListener('mousedown', (e) => e.target.style.backgroundColor = `${color}`);
    gridContainer.appendChild(grid);
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