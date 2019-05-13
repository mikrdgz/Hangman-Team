"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const theme = "The theme is Marvel Characters!";
const characters = ["Thor", "Spiderman", "Starlord", "Hulk", "Rocket"];
//console.log(characters.length);
let word = characters[
  Math.floor(Math.random() * characters.length)
].toLowerCase();
let numberOfGuesses = 10;
let answer = [];
let curWordLetters = [];
let numberOfLetters = 0;
let wrongLetters = [];

console.log("The current word: ", word);
curWordLetters = word.split("");
console.log("Letters in the word: ", curWordLetters);
numberOfLetters = curWordLetters.length;
console.log("The number of letters in the current word is: ", numberOfLetters);

for (let i = 0; i < numberOfLetters; i++) {
  answer.push("_");
}
//console.log(answer.join(" "));

function hangMan(guess) {
  let correctLetter = false;
  for (let j = 0; j < numberOfLetters; j++) {
    if (word[j] === guess) {
      correctLetter = true;
    }
  }

  if (correctLetter) {
    for (let i = 0; i < numberOfLetters; i++) {
      if (word[i] === guess) {
        answer[i] = guess;
      }
    }
    console.log(answer.join(" "));
  } else {
    console.log(answer.join(" "));
    wrongLetters.push(guess);
    console.log("Remaining number of guesses left: ", numberOfGuesses--);
  }

  if (curWordLetters.toString() === answer.toString()) {
    console.log("YOU WIN!");
    return;
  } else if (numberOfGuesses === 0) {
    console.log("YOU LOST!");
    return;
  }
}
hangMan();

// function makeDashes() {
//   for (let i = 0; i < word.length; i++) {
//     answer[i] = "_";
//   }
//   console.log(answer.join(" "));
// }

// function hangMan(guess) {
//   if (guess === null) {
//     console.log("Enter at least a letter:");
//     return;
//   }
//   if (guess.length !== 1) {
//     console.log("Enter a single letter:");
//     return;
//   }
//   if (word.includes(guess)) {
//     console.log("Correct!");
//     console.log("Number of attempts to guess: ", numGuesses);
//     return;
//   }

//   if (!word.includes(guess)) {
//     console.log("Wrong!");
//     console.log("Number of attempts left: ", --numGuesses);
//     return;
//   }
// }

function getPrompt() {
  //makeDashes();
  rl.question("Guess: ", answer => {
    console.log(hangMan(answer));
    getPrompt();
  });
}
getPrompt();
