document.addEventListener("DOMContentLoaded", (event) => {
    const gridContainer = document.querySelector("#grid-container");
    for (let i = 0; i < 256; i++) {
        let gridSquare = document.createElement("div");
        gridSquare.classList.add("grid-square");
        gridSquare.setAttribute(
            "style",
            "width: 6.25%; aspect-ratio: 1/1; text-align: center; clear:both;"
        );
        gridContainer.append(gridSquare);
    }

    let gridSquareList = document.querySelectorAll(".grid-square");
    gridSquareList.forEach((gridSquare) => {
        gridSquare.addEventListener("mouseover", () => {
            gridSquare.style.backgroundColor = "black";
        });
    });

    const adjustScreenSizeButton = document.querySelector("#adjust-screen-size-button");
    adjustScreenSizeButton.addEventListener("click", () => {
        screenSizeInput = prompt("Select Canvas Width (max 100):");
        gridSquareList = document.querySelectorAll(".grid-square");
        if (screenSizeInput <= 100) {
            gridSquareList.forEach((gridSquare) => {
                gridContainer.removeChild(gridSquare);
                console.log("removed!")
            });
            
            for (let i = 0; i < (screenSizeInput*screenSizeInput); i++) {
                let newGridContainer = document.querySelector("#grid-container");
                let gridSquare = document.createElement("div");
                gridSquare.classList.add("grid-square");
                // let gridText = document.createElement("p")
                // gridText.textContent = i+1;
                // gridText.style.fontSize = "3px"
                // gridSquare.append(gridText)

                gridSquare.style.width = `${100/screenSizeInput}%`
                newGridContainer.append(gridSquare);
            }

            gridSquareList = document.querySelectorAll(".grid-square");
            gridSquareList.forEach((gridSquare) => {
                gridSquare.addEventListener("mouseover", () => {
                    gridSquare.style.backgroundColor = "black";
                })
            })
        }
        else {
            screenSizeInput = prompt("That Screen Size is Too Large!");
        }
    });
});
