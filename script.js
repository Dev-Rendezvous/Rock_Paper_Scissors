function getHumanChoice(){
    let humanChoice;
    do{
        humanChoice = prompt("Enter your choice of weapon:");
    }while(!humanChoice);

    let choice = humanChoice.toUpperCase();
    console.log(`You chose ${choice}!`);
    if(choice == "ROCK"){
        return 1;
    }
    else if(choice == "PAPER"){
        return 2;
    }
    else if(choice == "SCISSORS" || choice == "SCISSOR"){
        return 3;
    }
    else{
        
        console.log("Weapon not available!");
        throw new Error("Weapon not available!");
    }
}

function getComputerChoice(){
    return Math.floor(Math.random() * 3) + 1;
}


function getWeaponName(choice){
    switch (choice) {
        case 1:
            return "ROCK";
        case 2:
            return "PAPER";
        case 3:
            return "SCISSORS";
        default:
            return "Unknown";
    }
}

function playRound(){
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    console.log(`The Computer chose ${getWeaponName(computerChoice)}!`);

    if (computerChoice > humanChoice) {
        console.log("Computer Wins!");
    }
    else if (computerChoice === humanChoice) {
        console.log("It's a DRAW!");
    }
    else {
        console.log("You WIN!");
    }
}

playRound();