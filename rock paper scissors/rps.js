var userInput = prompt("What is your choice?");
function getUserChoice () {
  
  userInput = userInput.toLowerCase();
  
  if (userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput === "bomb"){
  return userInput;
  } else {    
    consoole.log("Error: Try again");
  } 
}

function getComputerChoice () {
 var randomNumber = Math.floor(Math.random() * 3);
   
  switch (randomNumber){
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
    default: 
      console.log("error");
      break;
        }
      }

var determineWinner = function(userChoice, computerChoice){
  
  if (userChoice ===  computerChoice ){
    console.log("tie! Try Again");
  }
  
  if (userChoice === "rock"){
    if (computerChoice === "paper"){
      return " The computer won!";
    } else if (computerChoice === "scissors"){
      return "You won";
    }
  }
  
  if (userChoice === "paper"){
    if (computerChoice === "rock"){
      return " You won!";
    } else if (computerChoice === "scissors"){
      return "The computer won";
    }
  }
  
  if (userChoice === "scissors"){
    if (computerChoice === "paper"){
      return " You won!";
    } else if (computerChoice === "rock"){
      return "The computer won!";
    }
  }
  
   if (userChoice === "bomb"){
    if (computerChoice === "paper" || computerChoice === "rock" || computerChoice === "scissors"){
      return " you won!";
    } 
  }
   
   };

function playGame() {
  var userChoice = getUserChoice();
  var computerChoice = getComputerChoice();
  
  console.log("You chose: " + userChoice);
  console.log("Computer chose: " + computerChoice);
  
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();












