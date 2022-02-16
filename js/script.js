/***** GLOBAL VALUES LIST *****/
//Store the player's guessed letters in the game (unordered list element)
const guessedLetters = document.querySelector(".guessed-letters");

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

//Counts the remaining guesses
let numGuesses = 8;

//Store the word for the game
let word = "actually";
let playerWord = "";

//Retrieve word list to select from txt word list on Skillcrush
/*const getWords = async function () {
    const data = await fetch("https://gist.githubusercontent.com/skillcrush-curriculum/7061f1d4d3d5bfe47efbfbcfe42bf57e/raw/5ffc447694486e7dea686f34a6c085ae371b43fe/words.txt");
    const words = await data.text();
    const wordArray = words.split("\n");
    const index = Math.floor(Math.random() * wordArray.length);
    word = wordArray[index].trim();
    console.log(word);
    updateWordInProgress(word);
}

//Start the game!
getWords();
*/

/***** MAIN JS SCRIPT *****/

//Create an array of dots to represent the target word
const updateWordInProgress = function (string) {
    let arr = [];
    for (let letter of string) {
        arr.push("●");
    };
    playerWord = arr.join("");
    console.log(arr.join(""));
}

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
        message.innerText = "You have already guessed this letter. Please try another letter!";
    } else {
        guesses.push(letter);
        updateLetterDisplay();
        updateGuesses(letter);
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

    playerWord = matches.join("");
    wordProgress.innerText = matches.join("");
}

//Update the number of guesses
const updateGuesses = function (guess) {
    word = word.toUpperCase();
    console.log(word, guess);

    if (word.includes(guess)) {
        message.innerText = "Congratulations! You guessed correctly. Select another letter.";
    } else {
        numGuesses -= 1;
        remainingSpan.innerText = `${numGuesses} guesses`;
        message.innerText = "Sorry that letter was not in the word. Please try again. You'll get it next time!";
    }

    if (numGuesses === 1) {
        message.innerText = `Be careful player. You only have one guess remaining. Don't screw up!`;
    } else if (numGuesses === 0) {
        message.innerText = `GAME OVER! You used all of your guesses. The word was ${word}.`;
    }
}

//Check if the player won
const playerWin = function() {
    console.log(playerWord, word);

    if (playerWord === word) {
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
    if (validInput !== undefined) {
        makeGuess(validInput);
    };
    wordInProgress(guesses);
    playerWin();
})

//**NOTES: What do you do if the ltter has more than one copy of a letter? */