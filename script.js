// create a webpage with a 16x16 grid of square divs
const board = document.querySelector("#container");
for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    board.appendChild(square);
};