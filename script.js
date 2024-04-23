// global variables here
const defaultSize = 16;
let size = defaultSize;
let backgroundColor = "black";
const board = document.querySelector("#board");
const resizeButton = document.querySelector("#resize");
const resetButton = document.querySelector("#reset");
const randomizeButton = document.querySelector("#randomize");
let randomColors = false;
function randomizeRGB() {
    return Math.floor((Math.random()*256));
}
function createGrid(){
    //clear the board before creating the grid
    board.innerHTML = ""; 
    for (let rows = 0; rows < size; rows++) {
	    const row = document.createElement("div");
        row.classList.add("row");
        board.appendChild(row);
        for (let columns = 0; columns < size; columns++) {
            const column = document.createElement("div");
            let opacity = 0;
            column.classList.add("column");
            row.appendChild(column);
            // Adding coloring event
            column.addEventListener("mouseover", () => {
                if (randomColors) {
                    column.style.backgroundColor = `rgb(${randomizeRGB()}, ${randomizeRGB()}, ${randomizeRGB()})`;
                } else {
                    column.style.backgroundColor = backgroundColor;
                };
                opacity += 0.1;
                column.style.opacity = opacity.toString();
            });
            resetButton.addEventListener("click", () => {
                column.style.backgroundColor = "white";
            });
            randomizeButton.addEventListener("click", () => {
                randomColors = true;
            });
        };
        
    };
}
// Resize button behavior: assign custom grid size
function resizeGrid(){
    resizeButton.addEventListener("click", () => {
        let newSize = prompt("insert size: ");
        newSize = parseInt(newSize);
        if (Number.isInteger(newSize) && newSize > 0 && newSize < 100) {
            size = newSize;
            createGrid();
        } else {
            alert("please enter an integer between 0 and 100");
        }});
}
// create a 16x16 grid by default:
createGrid();
resizeGrid();
