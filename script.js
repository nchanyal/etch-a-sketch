const containerDiv = document.querySelector("#container");

function createRowDivs(){
    for(let i = 0; i < 16; i++){
        let rowDiv = document.createElement("div");
        rowDiv.setAttribute("id", `row-${i+1}`);
        containerDiv.appendChild(rowDiv);
    }
}

function createSquare(square){
    square.style.border = "2px solid orange";
    square.style.height = "30px";
    square.style.width = "30px";
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "green";
    });

    return square;
}

function createGridOfSquares(){
    for(let i = 0; i < 16; i++){
        let currentRowDiv = document.querySelector(`#row-${i+1}`);
        for(let k = 0; k < 16; k++){
            let squareDiv = createSquare(document.createElement("div"));
            currentRowDiv.appendChild(squareDiv);
        }
    }
}

createRowDivs();
createGridOfSquares();