// EXERCIȚIUL 1 - Funcție de calcul

function calculateSum(a, b) {
    return a + b;
}

console.log("Suma 9 + 3 =", calculateSum(9, 3));
console.log("Suma 10 + 7 =", calculateSum(10, 7));


// EXERCIȚIUL 2 - Obiect cu metodă

const student = {
    name: "Ion",
    age: 18,
    grade: 9,

    introduce: function() {
        console.log("Sunt " + this.name + " și am " + this.age + " ani.");
    }
};

student.introduce();

student.grade = 10;

console.log("Noua notă:", student.grade);


// EXERCIȚIUL 3 - Piatra, Hârtia, Foarfeca

const gameScore = {

    player: 0,
    computer: 0,
    draws: 0,

    displayScore: function() {
        alert(
            "Scorul actual:\n" +
            "Tu: " + this.player + "\n" +
            "Calculator: " + this.computer + "\n" +
            "Egalități: " + this.draws
        );
    }
};


const choices = ["piatra", "hartia", "foarfeca"];


const playerChoiceElement = document.getElementById("playerChoice");
const computerChoiceElement = document.getElementById("computerChoice");
const resultTextElement = document.getElementById("resultText");

const playerScoreElement = document.getElementById("playerScore");
const computerScoreElement = document.getElementById("computerScore");
const drawsElement = document.getElementById("draws");
const roundsElement = document.getElementById("rounds");
const leaderElement = document.getElementById("leader");


let rounds = 0;


function getComputerChoice() {

    const randomIndex = Math.floor(Math.random() * choices.length);

    return choices[randomIndex];
}


function checkWinner(playerChoice, computerChoice) {

    if (playerChoice === computerChoice) {
        gameScore.draws++;
        return "Egalitate!";
    }

    if (
        (playerChoice === "piatra" && computerChoice === "foarfeca") ||
        (playerChoice === "foarfeca" && computerChoice === "hartia") ||
        (playerChoice === "hartia" && computerChoice === "piatra")
    ) {
        gameScore.player++;
        return "Ai câștigat!";
    }

    gameScore.computer++;
    return "Calculatorul a câștigat!";
}


function playGame(playerChoice) {

    const computerChoice = getComputerChoice();

    const result = checkWinner(playerChoice, computerChoice);

    rounds++;

    playerChoiceElement.textContent = playerChoice;
    computerChoiceElement.textContent = computerChoice;

    resultTextElement.textContent = result;

    playerScoreElement.textContent = gameScore.player;
    computerScoreElement.textContent = gameScore.computer;
    drawsElement.textContent = gameScore.draws;

    roundsElement.textContent = rounds;

    updateLeader();

    gameScore.displayScore();

    checkFinalWinner();
}


function updateLeader() {

    if (gameScore.player > gameScore.computer) {
        leaderElement.textContent = "Tu conduci scorul!";
    }
    else if (gameScore.computer > gameScore.player) {
        leaderElement.textContent = "Calculatorul conduce scorul!";
    }
    else {
        leaderElement.textContent = "Scorul este egal.";
    }
}


function checkFinalWinner() {

    if (gameScore.player === 5) {
        alert("Felicitări! Ai câștigat jocul cu 5 victorii!");
        resetGame();
    }

    if (gameScore.computer === 5) {
        alert("Calculatorul a câștigat jocul cu 5 victorii!");
        resetGame();
    }
}


function resetGame() {

    gameScore.player = 0;
    gameScore.computer = 0;
    gameScore.draws = 0;

    rounds = 0;

    playerScoreElement.textContent = 0;
    computerScoreElement.textContent = 0;
    drawsElement.textContent = 0;
    roundsElement.textContent = 0;

    playerChoiceElement.textContent = "-";
    computerChoiceElement.textContent = "-";

    resultTextElement.textContent = "Așteaptă rezultatul...";

    leaderElement.textContent = "Scorul este egal.";
}



document.getElementById("rock").addEventListener("click", function() {
    playGame("piatra");
});

document.getElementById("paper").addEventListener("click", function() {
    playGame("hartia");
});

document.getElementById("scissors").addEventListener("click", function() {
    playGame("foarfeca");
});



document.getElementById("newGame").addEventListener("click", function() {
    resetGame();
});
