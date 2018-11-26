// 2. The app randomly picks a letter, and the user has to guess which letter the app chose.
// 4. Wins: (# of times the user has guessed the letter correctly)
// 5. Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)
// 6. Guesses Left: (# of guesses left. This will update)
// 7. Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)
// 8. When the player wins, increase the Wins counter and start the game over again (without refreshing the page).
// 9. When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).

var wins = 0;
var losses = 0;
var guessesLeft = 9
var guesses = [];
var arrayLetters = ["a", "b", "c", "d", "e","f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var randomLetter = arrayLetters[Math.floor(Math.random() * arrayLetters.length)];
console.log(randomLetter)

document.onkeyup = function(event){
    var userInput = event.key.toLowerCase();
    console.log(userInput);

    guesses.push(userInput);

    if (userInput === randomLetter){
        wins++
        console.log(wins)
    }
    
    if (userInput !== randomLetter){
        losses++
        console.log("you lose")
    }
    
    // if (guessesLeft === 0) {
    //     return;
    //   }

    document.getElementById("guesses").innerHTML = "Your Guesses So Far: " + guesses
    console.log(guesses) 
};

function updateScore() {    
    document.getElementById("wins").innerHTML = "Wins: " + wins;

    document.getElementById("losses").innerHTML = "Losses: " + losses;

    document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
};

updateScore();





