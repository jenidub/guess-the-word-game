/***** GLOBAL VARIABLES LIST *****/
//Store the player's guessed letters in the game (unordered list element)
const guessedLetters = document.querySelector(".guessed-letters")

//Guess button selector
const guessButton = document.querySelector(".guess");

//Text input selector
const playerInput = document.querySelector(".letter");

//Word progress paragraph selector
const wordProgress = document.querySelector(".word-in-progress");

//Remaining guesses paragraph selector
const remainingGuess = document.querySelector(".remaining");
const remainingSpan = document.querySelector(".remaining span");

//Game messages paragraph selector
const messages = document.querySelector(".message");

//Play again button selector
const playAgainButton = document.querySelector(".play-again");

//Test word variable
let word = "magnolia";

/***** MAIN JS SCRIPT *****/

//Create function to create an array of dots to represent the target word
const updateWordInProgress = function (string) {
    let arr = [];
    for (let letter of string) {
        arr.push("●");
    };
    console.log(arr.join(""));
};

updateWordInProgress(word);

//Create function to handle when the player clicks the Guess button
guessButton.addEventListener("click", function(e) {
    e.preventDefault();
    let userInput = playerInput.value;
    console.log(userInput);
    playerInput.value = "";
});