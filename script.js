const WIDTH_UNITS = 4;
const HEIGHT_UNITS = 4;
const container = document.querySelector("#container");

//function to draw the grid
for(let i = 0; i < WIDTH_UNITS*HEIGHT_UNITS; i++){
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.textContent = "x=sqrt(y)";
    container.appendChild(cell);    
}