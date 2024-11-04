let btnNumSqrs = 0;
const container = document.querySelector("#container");
const btn = document.querySelector("#button");
btn.textContent = "change # squares";

btn.addEventListener("click", () => {
    btnNumSqrs = parseInt(prompt("Choose a number of squares per side"), 10);
    if (btnNumSqrs > 0) {
        container.textContent = ""; // Clear previous grid
        drawGrid(btnNumSqrs);
    }
});

// Function to draw the grid
function drawGrid(width) {
    const cellSize = 400 / width; // Calculate cell size in pixels for 400px container

    for (let i = 1; i <= width * width; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");

        cell.style.width = `${cellSize}px`;   // Set cell width in pixels
        cell.style.height = `${cellSize}px`;  // Set cell height in pixels
        cell.textContent = i;
        container.appendChild(cell);

        cell.addEventListener("mouseenter", () => {
            cell.classList.add("new");
        });
    }
}