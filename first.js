

let humanScore = 0;
let computerScore = 0;
let cChoice;
let uChoice;
let humanSelection;
let computerSelection;
let i = 0;

console.log(playGame());
//Rock beats scissors, scissors beat paper, and paper beats rock.

function playGame(){

    for(let n=i;i<=4 ; i++){
        humanSelection = getHumanChoice();
        computerSelection =  getComputerChoice();
         
        if(humanSelection == "cancel" ){
            return;
        }
        else if (humanSelection == "invalid"){
            i--;
           while(humanSelection !== "invalid"){
            humanSelection = getHumanChoice();
            playRound(humanSelection, computerSelection);
            winner();
           }
        }
        else {
            playRound(humanSelection, computerSelection);
            console.log("Computer choice is "+computerSelection+"<====>"+"Human choice is "+humanSelection);
            winner();
            
        }    
    }
}


function playRound (humanChoice, computerChoice){
    if(humanChoice == "rock" && computerChoice=="scissors" || humanChoice == "scissors" && computerChoice=="paper" || humanChoice == "paper" && computerChoice=="rock" ){
        humanScore++;
        return alert("CongratS! you won this round :)");
    }
    else if(computerChoice == "rock" && humanChoice=="scissors" || computerChoice == "scissors" && humanChoice=="paper" || computerChoice == "paper" && humanChoice=="rock"){
        computerScore++;
        return alert("You lost this round :(");
    }
    else if(humanChoice == computerChoice){
        return alert("Oops! its a draw! :|");
    }
}

function winner(){
    if (i==4 && (humanScore > computerScore)) {
        alert("Congratulations! You have won the game");
    } else if (i==4 && (computerScore > humanScore)) {
        alert("You lost the game, Better luck next time")
    }
}

function getComputerChoice(){
    cChoice= Math.round(Math.random() *2);

    if(cChoice==0){
        return "rock";
    }
    else if(cChoice==1){
        return "paper";
    }
    else {
        return "scissors"
    }
}
//console.log(getComputerChoice());


function getHumanChoice (){
    uChoice = prompt(` Please provide your choice, Rock, Paper or Scissors ?`);
           
            if(uChoice === null) {
                alert ("see ya later");
               return "cancel";
            }
            else if(uChoice.toLowerCase()=="rock") {
                return uChoice;
            }
            else if (uChoice.toLowerCase()=="paper"){
                return uChoice;
            }
            else if (uChoice.toLowerCase()=="scissors"){
                return uChoice;
            }
            else {
            alert("You have provided an invalid input, please provide a valid input to proceed");
             return "invalid";
            }
}
//console.log(getHumanChoice());


 







