const W_UNIT = 4;
const H_UNIT = 4;
const container = document.querySelector("#container");

//function to draw the grid
function drawGrid(width, height){
    for(let i = 1; i <= width*height; i++){
        const cell = document.createElement("div");
    
        cell.classList.add("cell");
        cell.textContent = i;
        container.appendChild(cell);
    
        // cell.addEventListener('mouseenter',(e) => {
        //     console.log(`mouse enter ${i}`);
        // });
    } 
}

function hoverEffect(){
    
}

drawGrid(W_UNIT, H_UNIT);