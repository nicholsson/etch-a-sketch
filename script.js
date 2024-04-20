// create a webpage with a 16x16 grid of square divs
const matrix = document.querySelector("#matrix");
for (let i = 0; i < 32; i++) {
    const grid_element = document.createElement("div");
    matrix.appendChild(grid_element);
};