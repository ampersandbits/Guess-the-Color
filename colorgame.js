var numSquares = 9;
var colors = generateRandomColors(numSquares);
var pickedcolor = pickcolor();
var squares= document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay =document.querySelector("#messageDisplay")
var h1 = document.querySelector("h1");
var resetButton= document.querySelector("#reset");
//var easyBtn= document.querySelector("#easyBtn");
//var hardBtn= document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");
for(var i=0; i<modeButtons.length; i++){
    modeButtons[i].addEventListener("click",function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        modeButtons[2].classList.remove("selected");
        this.classList.add("selected");
        if(this.textContent ==="Easy"){
            numSquares = 3;
            modeButtons[1].classList.remove("selected");
            modeButtons[2].classList.remove("selected");
        }
        else if (this.textContent === "Normal") {
            numSquares = 6;
            modeButtons[0].classList.remove("selected");
            modeButtons[2].classList.remove("select");
        }
        else{
            numSquares = 9;
            modeButtons[1].classList.remove("selected");
        }
        // this.textContent === "Easy" ? numSquare= 3 : numSquare =6;
        reset();
        // Figure out how many squares to show
        // pick new colors
        // pick a new picked color
        // update page to reflect changes 
    });
}
function reset(){
     colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedcolor = pickcolor();
    //change colorDisplay to match a picked color
    colorDisplay.textContent = pickedcolor;
    resetButton.textContent= "New Colors";
    messageDisplay.textContent = "";
    //change colors of squares
    for (var i = 0; i< squares.length; i++){
        if (colors[i]) {
            squares[i].style.display= "block";
            squares[i].style.backgroundColor = colors[i];
            
        }
        else{
            squares[i].style.display = "none";
        }
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor="steelblue";
}
// easyBtn.addEventListener("click",function(){
//     easyBtn.classList.add("selected");
//     hardBtn.classList.remove("selected");
//     numSquares=3;
//     colors = generateRandomColors(3);
//     pickedcolor = pickcolor();
//     colorDisplay.textContent = pickedcolor;
//     for(var i = 0; i<squares.length; i++){
//         if(colors[i]){
//             squares[i].style.backgroundColor = colors[i];
//         }
//         else{
//             squares[i].style.display="none";
//         }
//     }

// });
// hardBtn.addEventListener("click",function(){
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     numSquares = 6;
//      colors = generateRandomColors(numSquares);
//     pickedcolor = pickcolor();
//     colorDisplay.textContent = pickedcolor;
//     for(var i = 0; i<squares.length; i++){
//             squares[i].style.backgroundColor = colors[i];
//             squares[i].style.display="block";
//     }
// });
resetButton.addEventListener("click", function(){
    // Generate all new Colors
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedcolor = pickcolor();
    //change colorDisplay to match a picked color
    colorDisplay.textContent = pickedcolor;
    this.textContent= "New Colors";
    messageDisplay.textContent = "";
    //change colors of squares
    for (var i = 0; i< squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor="steelblue";
    resetButton.textContent="New Game";
});
colorDisplay.textContent = pickedcolor;
for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedcolor) {
            messageDisplay.textContent = "Correct";
            changeColors(clickedColor);
            h1.style.backgroundColor=clickedColor;
            resetButton.textContent="Play Again!";
    }
    else{
        this.style.backgroundColor="#232323";
        messageDisplay.textContent = "Try Again";
    }
    
    });
    
}
function changeColors(color){
    //loopthrough all squares
    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}
function pickcolor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
    
}
function generateRandomColors(num) {
    // make an Array
    var arr = [];
    // repeat num Times
    for (var i = 0; i < num; i++){
        arr.push(randomColor());
    }
     return arr;   
}
function randomColor() {
    //pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);
    // pick a "green" from 0 - 255
    var g = Math.floor(Math.random() * 256);
    // pick a "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
    
}
