"use strict";

const characters = ["Thor", "Spiderman", "Starlord", "Hulk", "Rocket"];

//generate hangman word

let word = characters[Math.floor(Math.random() * characters.length)];

//Start with - for unanswered letters. Must be the length of the word.
let answerArray = [];

let currentWord = "";
let currentWordLetters = [];
let numberOfLetters = 0;

function hangMan() {
//   // Current Word
  currentWord = characters[Math.floor(Math.random() * characters.length)];
  console.log("The current word is: ", currentWord);

//   // Break the current word into individual letter
  currentWordLetters = currentWord.split("");
  console.log("The letters in current word are: ", currentWordLetters);

//   // Get the length of letters in the word
  numberOfLetters = currentWordLetters.length;
  console.log("The number of letters in the current word is: ", numberOfLetters);

  for (let i = 0; i < numberOfLetters; i++) {
    answerArray.push("_");
  }
  console.log(answerArray);
  document.getElementById("word").innerHTML = answerArray.join(" ");
}



function checkValue(letter) {
  for (let i = 0; i < numberOfLetters; i++) {
    if(currentWord[i] === letter) {
      answerArray[i] = letter;
    }
  }
}
  

hangMan();
document.onkeyup = function(event) {
  let lettersGuessed =document.getElementById("guess").value.toLowerCase();
  checkValue(lettersGuessed);
  document.getElementById("word").innerHTML = answerArray.join(" ");
}



// function getWordArr() {
//   for (let i = 0; i < word.length; i++) {
//     answerArray[i] = "_";
//   }
//   for (let i = 0; i <= word.length; i++) {
//     let w = document.getElementById("word");
//     w.innerText = answerArray;
//   }
// }

// // We need an input to guess a letter
// let userGuess = [];

// function getPrompt() {
//   userGuess = document.getElementById("guess").value;
// }

// function hangMan() {
//   getWordArr(characters);
// }

// function checkValue() {
//   getPrompt();
//   for (let i = 0; i <= word.length; i++) {
//     if (word[i] === userGuess) {
//       //I cant figure out how to insert the users guess in the answerArray!
//     }
//   }
// }

// hangMan();

//If that letter is not a match, we need to print 'Not a match'

//Must also keep track of attempts. 5 is a loss

