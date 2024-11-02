const GRID_WIDTH = 4;
const GRID_HEIGHT = 4;
const container = document.querySelector("#container");

for(let i = 0; i < GRID_WIDTH*GRID_HEIGHT; i++){
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.textContent = "ABC";
    container.appendChild(cell);    
}