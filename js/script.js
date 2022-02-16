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

//Stores player guesses in an array
const makeGuess = function(letter) {
    letter = letter.toUpperCase();

    if (guesses.includes(letter)) {
        messages.innerText = "You have already guessed this letter. Please try another letter!";
    } else {
        guesses.push(letter);
        updateLetterDisplay();
        wordInProgress(guesses);
    };
}

//Updates the letter display in the game to track guesses
const updateLetterDisplay = function() {
    guessedLetters.innerHTML = "";
    for (let letter of guesses) {
        let li = document.createElement("li");
        li.innerText = letter;
        guessedLetters.append(li);
    }
}

//Update the word in progress based on player guesses
const wordInProgress = function(arr) {
    let wordUpperArray = word.toUpperCase().split("");
    let matches = [];

    for (let letter of wordUpperArray) {
        if (arr.includes(letter.toUpperCase())) {
            matches.push(letter);
        } else {
            matches.push("●");
        }
    };

    wordProgress.innerText = matches.join("");
}

//Check if the player won
const playerWin = function() {
    let playerGuess = guesses.join("");
    console.log(playerGuess, word);

    if (playerGuess === word) {
        message.classList.add("win");
        message.innerHTML = '<p class="highlight">You guessed correct the word! Congrats!</p>.';
    }
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
    wordInProgress(guesses);
    playerWin();
});

//**NOTES: What do you do if the ltter has more than one copy of a letter? */