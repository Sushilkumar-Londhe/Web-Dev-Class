const validInput = ["rock","paper","scissors"];

let userInput = "rock";

const timepass = () => {
    let userInput = "rock";

if(validInput.includes(userInput) == false) {
        console.log("Invalid Input");
    }
    
    let computorInput = validInput[parseInt(Math.random() * 3)];
    
    if(userInput == "rock"){
        if(computorInput == "rock"){
            console.log("Draw");
        }else if(computorInput == "scissors"){
            console.log("You Win");
        }else{
            console.log("You Lose");
        }
    }else if (userInput == "scissors"){
        if(computorInput == "rock"){
            console.log("You Lose");
        }else if(computorInput == "scissors"){
            console.log("Draw");
        }else{
            console.log("You Win");
        }
    }else {
        if(computorInput == "rock"){
            console.log("You Win");
        }else if(computorInput == "scissors"){
            console.log("You lose");
        }else{
            console.log("Draw");
        }
    }
}
    
