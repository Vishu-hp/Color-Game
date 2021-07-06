let numSquares = 6;
let colors= generateRandomColors(numSquares);

const squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
const messageDisplay = document.querySelector("#message");
const h1 = document.querySelector("h1");
const resetButton = document.querySelector("#reset");
const easyBtn = document.querySelector("#easyBtn");
const hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click",function(){
    messageDisplay.textContent = "";

    h1.style.backgroundColor = "steelblue";
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");

    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(let i=0;i<squares.length ;i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }
})


hardBtn.addEventListener("click", function () {
    messageDisplay.textContent = "";

    h1.style.backgroundColor = "steelblue";
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");

    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
})

resetButton.addEventListener("click",function(){
    //generate new colors
    colors = generateRandomColors(numSquares);
    //pick a new random color
    pickedColor = pickColor();
    //Change color Display
    colorDisplay.textContent = pickedColor;
    //change colors of squares
    for(let i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    } 
    //reset h1 background
    h1.style.backgroundColor = "steelblue";

    messageDisplay.textContent = "";
    this.textContent = "New Colors";
})

colorDisplay.textContent = pickedColor;

for(let i=0; i< squares.length ; i++){
    //added initial color to  squares 
    squares[i].style.backgroundColor = colors[i];
    
    //adding event listener to squares
    squares[i].addEventListener("click",function(){
        //grab color of clicked square
        let clickedColor = this.style.backgroundColor;

        //compare color to pickedColor
        if(clickedColor === pickedColor){
            // alert("Correct");
            messageDisplay.textContent = "Correct!!";
            resetButton.textContent = "Play Again";
            changeColors(pickedColor);
            h1.style.backgroundColor = clickedColor ;
        }
        else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

function changeColors(color){
    //loop through all squares
    for(let i=0;i< squares.length ;i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    const random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //make an array
    let arr = [];

    //repeat num times
    for(let i=0 ; i< num ; i++){
        //generate random color and push into array
        arr.push(randomColor());
    }

    //return array
    return arr;
}

function randomColor(){
    //pick "red" from 0 - 255
    let r = Math.floor(Math.random() * 256);
    //pick "green" from 0 - 255
    let g = Math.floor(Math.random() * 256);
    //pick "blue" from 0 - 255
    let b = Math.floor(Math.random() * 256);

    //"rgb(r, g, b)"
    return "rgb(" + r + ", " + g + ", " + b +")";
}