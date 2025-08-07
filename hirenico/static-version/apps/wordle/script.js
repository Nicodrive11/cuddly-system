console.log("hello wordle");

let messageTag = document.querySelector("#message");
let currentRow = 1;
let currentTileIndex = 0;
let board = [["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""]]
let allowedWords = [];
let answerWords = [];
let realWords = [];
let secretWord = "";
let maxAttempts = 6;
let attempts = 0;


// API call
fetch("https://wordle-api.up.railway.app/words").then(function(response) {
    response.json().then(function (data) {
        console.log(`There are ${data.allowed.length + data.answers.length} 
            valid words and ${data.answers.length} possible answers`); 
        allowedWords = data.allowed;
        answerWords = data.answers;
        realWords = data.allowed + data.answers;
        secretWord = answerWords[Math.floor(Math.random() * answerWords.length)].toUpperCase()
        console.log(secretWord)
        }); 
    });

function rowOne(){ //creates row 1
    let row1 = document.createElement("div");
    gameGrid.appendChild(row1);
    row1.className = "rows";
    row1.id = "row1";
    for (let i = 0; i < 5; i++){
        let newBox = document.createElement("div");
        newBox.className = "ten";
        newBox.id = `1${i}`;
        newBox.textContent = ""
        row1.appendChild(newBox);
    }
}

function rowTwo(){ //creates row 2
    let row2 = document.createElement("div");
    gameGrid.appendChild(row2);
    row2.className = "rows";
    row2.id = "row2";
    for (let i = 0; i < 5; i++){
        let newBox = document.createElement("div");
        newBox.className = "twenty";
        newBox.id = `2${i}`;
        newBox.textContent = ""
        row2.appendChild(newBox);
    }
}

function rowThree(){ //creates row 3
    let row3 = document.createElement("div");
    gameGrid.appendChild(row3);
    row3.className = "rows";
    row3.id = "row3";
    for (let i = 0; i < 5; i++){
        let newBox = document.createElement("div");
        newBox.className = "thirty";
        newBox.id = `3${i}`;
        newBox.textContent = ""
        row3.appendChild(newBox);
    }
}

function rowFour(){ //creates row 4
    let row4 = document.createElement("div");
    gameGrid.appendChild(row4);
    row4.className = "rows";
    row4.id = "row4";
    for (let i = 0; i < 5; i++){
        let newBox = document.createElement("div");
        newBox.className = "fourty";
        newBox.id = `4${i}`;
        newBox.textContent = ""
        row4.appendChild(newBox);
    }
}

function rowFive(){ //creates row 5
    let row5 = document.createElement("div");
    gameGrid.appendChild(row5);
    row5.className = "rows";
    row5.id = "row5";
    for (let i = 0; i < 5; i++){
        let newBox = document.createElement("div");
        newBox.className = "fitty";
        newBox.id = `5${i}`;
        newBox.textContent = ""
        row5.appendChild(newBox);
    }
}

function rowSix(){ //creates row 6
    let row6 = document.createElement("div");
    gameGrid.appendChild(row6);
    row6.className = "rows";
    row6.id = "row6";
    for (let i = 0; i < 5; i++){
        let newBox = document.createElement("div");
        newBox.className = "sixty";
        newBox.id = `6${i}`;
        newBox.textContent = ""
        row6.appendChild(newBox);
    }
}

function createBoard(){
rowOne()
rowTwo()
rowThree()
rowFour()
rowFive()
rowSix()
}

createBoard()

//updates dom and game array after every keyboard input
function updateActiveTile(letter) {
    let currentTile = document.getElementById(`${currentRow}${currentTileIndex}`);
    if (currentTileIndex < 5) {
        currentTile.textContent = letter;
        currentTileIndex++; // Move to the next tile
        board[currentRow - 1][currentTileIndex - 1] = letter;
    }
}

//game logic
function gameLogic(){
    let result = []; //blank array to store background color from game logic loop
    let secretArr = secretWord.split("");
    let rowArr = board[currentRow - 2].join("");
    // board[currentRow - 1][currentTileIndex - 1] = letter
    // let lineInput = (board[currentRow - 1]).toString;
    for(let i = 0; i < 5; i ++){
        if (board[currentRow - 2][i] == secretArr[i]){
            secretArr[i] = null;
            result.push("green");
        } else if (secretWord.includes(rowArr[i]) && board[currentRow - 2][i] != secretArr[i]){
            secretArr[i] = null;
            result.push("yellow");
        }
        else{
            result.push("gray");
        }
    }

    for (let i = 0; i < 5; i++) {
        let currentTile = document.getElementById(`${currentRow - 1}${i}`);
        if (result[i] == "green") {
            currentTile.style.backgroundColor = "green";
        } else if (result[i] == "yellow") {
            currentTile.style.backgroundColor = "yellow";
            currentTile.style.color = "black";
        } else {
            currentTile.style.backgroundColor = "gray";
        }
    }

    if (rowArr == secretWord){
        messageTag.textContent = "You guessed the correct word"
        currentRow = currentRow + 10;
        }

    console.log("Results:", result);
    console.log(secretArr);
    console.log(rowArr);
    console.log(secretWord);
    return result;
}


//Keyboard inputs
document.addEventListener("keydown", function (event) {

    if (event.keyCode == 8) {
        // backspace
        if (currentTileIndex > 0) {
            currentTileIndex--; // Move back to the previous tile
            let currentTile = document.getElementById(`${currentRow}${currentTileIndex}`);
            currentTile.textContent = ""; // Clear the tile content
            board[currentRow - 1][currentTileIndex] = "";
            console.log(board)
            messageTag.textContent = ""
        }
    } else if (event.keyCode >= 65 && event.keyCode <= 90) {
        // letters (A-Z)
        if (currentTileIndex < 5) {
            let letter = event.key.toUpperCase(); // Convert to uppercase
            updateActiveTile(letter);
            console.log(board)
            console.log(currentRow - 1);
            messageTag.textContent = ""
            if (currentTileIndex == 5 && currentRow <= 6) {
                messageTag.textContent = "Enter Key to submit attempt"
            }
        }
    } 
    
    else if (event.keyCode == 13) {
        // Enter key to move to the next row
        if (currentTileIndex == 5 && currentRow <= 6) {
            let lineInput = (board[currentRow - 1].join("")).toLowerCase();
          console.log(lineInput);
        // if (currentTileIndex == 5 && currentRow <= 6 && isRealWord == true) {

            if (realWords.includes(lineInput) == true) {
            currentRow++; // Move to the next row
            currentTileIndex = 0; // Reset to the first tile in the new row
            console.log(board)
            messageTag.textContent = ""
            attempts ++
            console.log(attempts)
            gameLogic()
            } 
            else {
            messageTag.textContent = "Please enter a real word"
            }
        } 
    }
});




//q = 81
//w = 87
//e = 69
//r = 82
//t = 84
//y = 89
//u = 85
//i = 73
//o = 79
//p = 80
//a = 65
//s = 83
//d = 68
//f = 70
//g = 71
//h = 72
//j = 74
//k = 75
//l = 76
//z = 90
//x = 88
//c = 67
//v = 86
//b = 66
//n = 78
//m = 77