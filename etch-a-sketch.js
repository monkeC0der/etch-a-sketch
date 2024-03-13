document.addEventListener("DOMContentLoaded", (event) => {
    const gridContainer = document.querySelector("#grid-container");
    for (let i = 0; i < 16; i++) {
        let gridSquare = document.createElement("div");
        let gridSquareText = document.createElement("h1");
        gridSquare.classList.add("grid-square");
        gridSquareText.textContent = i+1;
        gridSquare.append(gridSquareText);
        gridContainer.append(gridSquare);
        
    }
});