const container = document.querySelector("#container");
const DISPLAY_SIZE = container.offsetWidth; //get container size from css file

const btn = document.querySelector("#button");
btn.textContent = "change # squares";

btn.addEventListener("click", () => {
    let btnNumSqrs = parseInt(prompt("Choose a number of squares per side"), 10);
    if (btnNumSqrs > 0 && btnNumSqrs <= 100) {
        container.textContent = ""; // Clear previous grid
        drawGrid(btnNumSqrs);
    }
    else{
        alert("Choose size between 1 and 100");
    }
}); 

// Function to draw the grid
function drawGrid(width) {
    const cellSize = DISPLAY_SIZE / width; // Calculate cell size in pixels for 400px container

    for (let i = 1; i <= width * width; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.flex = `${cellSize}px 0 0`;
        // cell.textContent = i;
        container.appendChild(cell);

        cell.addEventListener("mouseenter", () => {
            cell.classList.add("new");
        });
    }
}