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

// Obiectul care păstrează scorul
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


// Variantele disponibile pentru calculator
const choices = ["piatra", "hartia", "foarfeca"];


// Variabile pentru elementele HTML
const playerChoiceElement = document.getElementById("playerChoice");
const computerChoiceElement = document.getElementById("computerChoice");
const resultTextElement = document.getElementById("resultText");

const playerScoreElement = document.getElementById("playerScore");
const computerScoreElement = document.getElementById("computerScore");
const drawsElement = document.getElementById("draws");
const roundsElement = document.getElementById("rounds");
const leaderElement = document.getElementById("leader");


// Numărul total de runde
let rounds = 0;


// Funcția care alege varianta calculatorului
function getComputerChoice() {

    const randomIndex = Math.floor(Math.random() * choices.length);

    return choices[randomIndex];
}


// Funcția care stabilește câștigătorul
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


// Funcția principală a jocului
function playGame(playerChoice) {

    const computerChoice = getComputerChoice();

    const result = checkWinner(playerChoice, computerChoice);

    rounds++;

    // Afișăm alegerile
    playerChoiceElement.textContent = playerChoice;
    computerChoiceElement.textContent = computerChoice;

    // Afișăm rezultatul
    resultTextElement.textContent = result;

    // Actualizăm scorul
    playerScoreElement.textContent = gameScore.player;
    computerScoreElement.textContent = gameScore.computer;
    drawsElement.textContent = gameScore.draws;

    // Actualizăm numărul de runde
    roundsElement.textContent = rounds;

    // Verificăm cine conduce
    updateLeader();

    // Afișăm scorul în alertă
    gameScore.displayScore();

    // Verificăm dacă cineva a ajuns la 5 victorii
    checkFinalWinner();
}


// Funcția care verifică cine conduce
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


// Funcția pentru verificarea câștigătorului final
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


// Funcția pentru resetarea jocului
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


// Evenimente pentru butoane

document.getElementById("rock").addEventListener("click", function() {
    playGame("piatra");
});

document.getElementById("paper").addEventListener("click", function() {
    playGame("hartia");
});

document.getElementById("scissors").addEventListener("click", function() {
    playGame("foarfeca");
});


// Butonul "Joc nou"

document.getElementById("newGame").addEventListener("click", function() {
    resetGame();
});