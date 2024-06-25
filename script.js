const containerDiv = document.querySelector("#container");

function createRowDivs(){
    for(let i = 0; i < 16; i++){
        let rowDiv = document.createElement("div");
        rowDiv.setAttribute("id", `row-${i+1}`);
        containerDiv.appendChild(rowDiv);
    }
}

function createGridOfSquares(){
    for(let i = 0; i < 16; i++){
        let currentRowDiv = document.querySelector(`#row-${i+1}`);
        for(let k = 0; k < 16; k++){
            let squareDiv = document.createElement("div");
            squareDiv.style.border = "2px solid orange";
            squareDiv.style.height = "30px";
            squareDiv.style.width = "30px";
            currentRowDiv.appendChild(squareDiv);
        }
    }
}

createRowDivs();
createGridOfSquares();