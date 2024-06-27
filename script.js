const containerDiv = document.querySelector("#container");
const adjustGridButton = document.querySelector("button");

function createRowDivs(numberOfSquaresPerSide){
    for(let i = 0; i < numberOfSquaresPerSide; i++){
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

function getNumberOfSquares(){
    return Number(prompt("Enter the number of squares you want per side: ", ));
}

function removeSquaresFromGrid(){
    containerDiv.innerHTML = "";
}

function addSquaresToGrid(numberOfSquaresPerSide){
    for(let i = 0; i < numberOfSquaresPerSide; i++){
        let currentRowDiv = document.querySelector(`#row-${i+1}`);
        for(let k = 0; k < numberOfSquaresPerSide; k++){
            let squareDiv = createSquare(document.createElement("div"));
            currentRowDiv.appendChild(squareDiv);
        }
    }
}

function createGridOfSquares(numberOfSquaresPerSide){
    removeSquaresFromGrid();

    if(numberOfSquaresPerSide > 100){
        createRowDivs(100);
        addSquaresToGrid(100);
    }else {
        createRowDivs(numberOfSquaresPerSide);
        addSquaresToGrid(numberOfSquaresPerSide);
    }
}

createGridOfSquares(16);

adjustGridButton.addEventListener("click", () => {
    createGridOfSquares(getNumberOfSquares());
});