function computerOptions(){
  const computerSelection= Math.floor(Math.random()*3);
  console.log(computerSelection)
  switch(computerSelection){
    case 0:
        return "rock";
        break;
    case 1:
        return "paper";
        break;
    case 2:
        return "scissors";
        
  }
}
function playerSelectionPrompt(roundNumber){
    let playerInputOkFlag=false;
    let playerInput;
    do{
        playerInput=prompt(`Type in your selection(rock,paper,scissors)`);
        playerInput=playerInput.toLocaleLowerCase().trim();
        switch(playerInput){
            case "rock":
            case "paper":
            case "scissors":
                playerInputOkFlag=true;
        }
        if(!playerInputOkFlag){
            alert("Please enter a valid input")
        }
    }while(!playerInputOkFlag)
    return playerInput;
}  

function playround(roundNumber){
    const computerSelection=computerOptions();
    const playerSelection=playerSelectionPrompt(roundNumber);
    console.log("p",playerSelection,"c",computerSelection)
    let outcome = comperSelections(playerSelection,computerSelection);
    if(outcome==="draw"){
        alert(`Its a draw! you both picked ${computerSelection}`)
    }else{
        alert(`You ${outcome}! ${outcome==="win"?playerSelection:computerSelection} beats ${outcome==="lose"?playerSelection:computerSelection}`)
    }
    return outcome;

} 

function comperSelections(playerSelection,computerSelection){
    if(playerSelection===computerSelection){
        return "draw"
    }else{
        switch (playerSelection){
            case "rock":
                if(computerSelection==="paper"){
                    return "lose";
                }else{
                    return "win";
                }
                break;
            case "scissors":
                if(computerSelection==="paper"){
                    return "win";
                }else{
                    return "lose";
                }
                break;
            case "paper":
                if(computerSelection==="scissors"){
                    return "lose";
                }else{
                    return "win";
                }
            break;
        }
    }
}

function game(){
    const score={
        player:0,
        computer:0
    }
        const outcome=playround();
        if(outcome==="win"){
            score.player;
        }
        else if(outcome==="lose"){
            score.computer;
        }
    alert(`The game is over. The total score is: \n The Player: ${score.player} \n The Computer: ${score.computer}`)
}

game();