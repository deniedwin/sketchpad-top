const container = document.querySelector("#container");
const btn = document.querySelector("#button");
btn.textContent = "grid width size?";

btn.addEventListener("click",() => {
    let btnNumSqrs = prompt("enter the size of the grid");
    tempValue = btnNumSqrs;
});

//function to draw the grid
function drawGrid(width){
    for(let i = 1; i <= width*width; i++){
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.textContent = i;
        container.appendChild(cell);

        cell.addEventListener("mouseenter",() => {
            cell.classList.add("new")
        });
    } 
}

drawGrid(4);