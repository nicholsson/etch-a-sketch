// little headache: squares contains a "list" of the Nodes with class .square
// so it is necessary to access that list with a for loop to add an event listener
function mouseOvering() {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "blue";
        })
    });
};
function createGrid(size){
    const board = document.querySelector("#container");
    const numberOfSquares = size * size;
    const squareSize = 800.0 / size;
    //clear the board before creating the grid
    board.innerHTML = ""; 
    for (let i = 0; i < numberOfSquares; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = squareSize + "px";
        square.style.height = squareSize + "px";
        board.appendChild(square);
        // call the coloring effect on mouse hovering after grid is created
        mouseOvering();
    };
}
// Size button behavior: assign custom grid size
function resizeGrid(){
    const sizeButton = document.querySelector("#size");
    sizeButton.addEventListener("click", () => {
        let newSize = prompt("insert size: ");
        newSize = parseInt(newSize);
        if (Number.isInteger(newSize) && newSize > 0) {
            size = newSize;
            createGrid(size);
            resetGrid();
        } else {
            alert("please enter an integer");
        }});
}
// When done drawing, reset the grid
function resetGrid(){
    const resetButton = document.querySelector("#reset");
    const squares = document.querySelectorAll(".square");
    resetButton.addEventListener("click", () => {
        squares.forEach(square => {
            square.style.backgroundColor = "white";
        })
    })
};
// create a 16x16 grid by default:
createGrid(16);
resetGrid();
resizeGrid();
