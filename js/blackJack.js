document.addEventListener("DOMContentLoaded", function () {


    var min = 1;
    var max =5;
    let total = 0;
    var random = Math.floor(Math.random()*(max-min+1))+min; //picks a random number in the range 1-5
    let addNumber = document.getElementById("addNumber");
    let userInput = document.getElementById("userInput")
    let outputContainer = document.getElementById("outputContainer");
    let startOver = document.getElementById("startOver");
    total+=random

    
    //console.log(random);


    //function to check validity of the input



    function validInput(input){
        //var input= prompt("please enter a number between 1-5 (to quit the game type exit):")
        //var number = parseInt(input);
        if(input===null || input==="exit"){
            outputContainer.innerHTML="you canceled the game";
            return "exit"; 
        } else{
            const number = parseInt(input);
            if(number<min || number > max || isNaN(number) || input === ""){
                //alert("Invalid input, omitted from your total");
                outputContainer.innerText="Invalid input, omitted from your total";
            }else{
                return number;
            }
            
            return 0;   //function returns 0 if output is invalid
        };
    }

    //function adding the input to total

    function addition(number){
        
        total += number;
        console.log("total is : " + total);
    }

    

    function resetGame(){

        userInput.value = "";
        total=0;
        //outputContainer.innerText = "";
        var random = Math.floor(Math.random()*(max-min+1))+min;
        total += random;

    }

   

    

    function checkGame(){
        if(total===21){
           outputContainer.innerText="Congratulation! you win!";
           startOver.innerText="To play again enter a number from 1 to 5";
           resetGame();
        } else if (total>21) {
           outputContainer.innerText= "Sorry,you lose! ";
           startOver.innerText="To play again enter a number from 1 to 5";
           resetGame();
        }
    }



    function start() {
        const input = userInput.value;
        const result = validInput(input);
        
        

        if (result === "exit") {
            userInput.value = "";
        } else if (result > 0 && result < 21) {
            addition(result);
            userInput.value = "";
            outputContainer.innerHTML="add another number";
            checkGame();
           
            
        } else if( result >= 21) {
            checkGame();
        }
        
    }


  



    addNumber.addEventListener("click",start);

});
