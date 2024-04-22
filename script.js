// global variables here
let defaultSize = 16;
let numberOfSquares = Math.pow(defaultSize, 2);
let size = defaultSize;
const board = document.querySelector("#container");
const resizeButton = document.querySelector("#size");
const resetButton = document.querySelector("#reset");
// more global variables need to be added
// here
//
function createGrid(){
    numberOfSquares = size * size;
    const squareSize = 800.0 / size;
    //clear the board before creating the grid
    board.innerHTML = ""; 
    for (let i = 0; i < numberOfSquares; i++) {
	const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = squareSize + "px";
        square.style.height = squareSize + "px";
        board.appendChild(square);
        // call the coloring effect on mouse hovering on each square
        square.addEventListener("mouseover", () => {
	square.style.backgroundColor = "blue";
	});
	// call the reset effect on each square when resetButton is clicked
	resetButton.addEventListener("click", () => {
	square.style.backgroundColor = "white";});
    };
}
// Size button behavior: assign custom grid size
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
