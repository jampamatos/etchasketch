const canvas = document.getElementById("canvas");


makeGrid(16, 16);
blackMarker();

function makeGrid (rows,cols) {
    canvas.style.setProperty('--grid-rows', rows);
    canvas.style.setProperty('--grid-cols', cols);

    for (i = 0; i < (rows * cols); i++){
        let cell = document.createElement("div");
        cell.innertext = (i+1);
        cell.style.backgroundColor = "white";
        canvas.appendChild(cell).className = "cell";
    }
}

function blackMarker(){
    let cells = document.getElementsByClassName("cell");
    for (let i = 0; i < cells.length; i++){
        cells[i].addEventListener("mouseover", function(){
            cells[i].style.backgroundColor = "black";
        })
    }
}

function rainbowMarker(){
    let cells = document.getElementsByClassName("cell");
    for (let i = 0; i < cells.length; i++){
        cells[i].addEventListener("mouseover", function(){
            cells[i].style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);;
        })
    }
}

function removeCells(){
    const elements = document.getElementsByClassName("cell");
    while (elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

function newGrid(rows, cols){
    removeCells();
    canvas.style.setProperty('--grid-rows', rows);
    canvas.style.setProperty('--grid-cols', cols);

    for (i = 0; i < (rows * cols); i++){
        let cell = document.createElement("div");
        cell.innertext = (i+1);
        cell.style.backgroundColor = "white";
        canvas.appendChild(cell).className = "cell";
    }
}

function newCanvas(){
    let size = prompt("Type in a number between 16 and 96:")
    if (isNaN(size)){
        alert("You must type in a number.")
        newCanvas();
    }else if (size < 6 || size > 96){
        alert("You must type in a number between 16 and 96.")
        newCanvas();
    }else
    newGrid(size,size);
    blackMarker();
}