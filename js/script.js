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
const message = document.querySelector(".message");

//Play again button selector
const playAgainButton = document.querySelector(".play-again");

//Maintain an array of guessed letters
const guesses = [];

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

//Validate user input as a single letter
const validateInput = function(input) {
    const acceptedLetter = /[a-zA-Z]/;

    if (input === "") {
        message.innerText = "Please enter a letter A-Z to play the game";
    } else if (input.length > 1) {
        message.innerText = "You entered more than one letter. Please enter a single letter A-Z" 
    } else if (!input.match(acceptedLetter)) {
        message.innerText = "You entered an invalid character. Please enter a letter A-Z to play the game"
    } else {
        return input;
    }
}

//
const makeGuess = function(letter) {
    if (guesses.includes(letter.toUpperCase())) {
        messages.innerText = "You have already guessed this letter. Please try another letter!";
    } else {
        guesses.push(letter);
    }
    console.log(guesses);
}


//Create function to handle when the player clicks the Guess button
guessButton.addEventListener("click", function(e) {
    message.value = "";
    e.preventDefault();
    let userInput = playerInput.value;
    playerInput.value = "";
    let validInput = validateInput(userInput);
    console.log(validInput);
    if (validInput !== undefined) {
        makeGuess(validInput);
    };
});