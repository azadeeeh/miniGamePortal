var min = 1;
var max = 5;
let total = 0;
let addNumber = document.getElementById("addNumber");
let userInput = document.getElementById("userInput")
let outputContainer = document.getElementById("outputContainer");
let startOver = document.getElementById("startOver");


//function to check validity of the input

function validInput(input) {
    //var input= prompt("please enter a number between 1-5 (to quit the game type exit):")
    //var number = parseInt(input);
    if (input === null || input === "exit") {
        outputContainer.innerHTML = "you canceled the game";
        return "exit";
    } else {
        const number = parseInt(input);
        if (number < min || number > max || isNaN(number) || input === "") {
            //alert("Invalid input, omitted from your total");
            outputContainer.innerText = "Invalid input, omitted from your total";
        } else {
            return number;
        }

        return 0;
    };
}

//function adding the input to total

function addition(number) {
    total += number;
    var random = Math.floor(Math.random() * (max - min + 1)) + min;
    total += random;
    outputContainer.innerHTML = "total is : " + total;
    startOver.innerText = "enter a number from 1 to 5";
}


//function that resets the game

function resetGame() {
    userInput.value = "";
    total = 0;
    //outputContainer.innerText = "";
    var random = Math.floor(Math.random() * (max - min + 1)) + min;
    total += random;
}

//function to check if the user wins or loses

function checkGame() {
    if (total === 21) {
        outputContainer.innerText = "Congratulation! you win!";
        startOver.innerText = "To play again enter a number from 1 to 5";
        resetGame();
    } else if (total > 21) {
        outputContainer.innerText = "total is : " + total + " Sorry, you lose! ";
        startOver.innerText = "To play again enter a number from 1 to 5";
        resetGame();
    }
}

//function for when user clicks the add number button

function start() {
    const input = userInput.value;
    const result = validInput(input);
    if (result === "exit") {
        userInput.value = "";
    } else if (result > 0 && result < 21) {
        addition(result);
        userInput.value = "";
        checkGame();
    } else if (result >= 21) {
        checkGame();
    }
}


addNumber.addEventListener("click", start);     //calling the function when user clicks



