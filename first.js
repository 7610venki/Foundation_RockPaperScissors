let humanScore = 0;
let computerScore = 0;
let cChoice;
let uChoice;
let humanSelection;
let computerSelection;
let i = 0;
let resultContainer = document.querySelector("#resultContainer");
let humanResult;
let computerResult;
let drawResult;
let uSelect = document.querySelector("#btnContainer");


uSelect.addEventListener("click",e=>{
humanSelection =  e.target.textContent;
computerSelection =  getComputerChoice();
    
if (humanScore<5 && computerScore<5) {
        playRound (humanSelection, computerSelection);
        }

        scoreBoard();

        if(humanScore==5 || computerScore==5){
        endResult ();
        humanScore =0;
        computerScore=0;
        }

})

function playRound (humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if(humanChoice == "rock" && computerChoice=="scissors" || humanChoice == "scissors" && computerChoice=="paper" || humanChoice == "paper" && computerChoice=="rock" ){
        humanScore++;   
        //return alert("CongratS! you won this round :)");
    }
    else if(computerChoice == "rock" && humanChoice=="scissors" || computerChoice == "scissors" && humanChoice=="paper" || computerChoice == "paper" && humanChoice=="rock"){
        computerScore++;
        //return alert("You lost this round :(");
    }
    else if(humanChoice == computerChoice){
      return alert("Oops! its a draw! :|");
   }
}

function scoreBoard(){
//using textCOntent we need to add the setup for style to include line breaks
  //  resultContainer.style.whiteSpace = "pre-wrap";
  // resultContainer.textContent = `Your score is ${humanScore} \nComputer score is ${computerScore}`;

//using innerHTML we can use HTML tags to break the line
resultContainer.innerHTML= `your score is     ==> ${humanScore} <br> 
                            Computer score is ==> ${computerScore}`;
}

function endResult (){
    
if (humanScore==5 && (humanScore > computerScore)) {
    alert("Congratulations! You have won the game");
    return;
}
if (computerScore==5 && (humanScore < computerScore)) {
    alert("Computer has won he game");
    return;
}
if (humanScore==5 && (humanScore==computerScore)) {
    alert("Game tied, no winner");
    return;
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
    }}