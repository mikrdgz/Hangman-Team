"use strict";

const characters = ["Thor", "Spiderman", "Starlord", "Hulk", "Rocket"];

//generate hangman word

let word = characters[Math.floor(Math.random() * characters.length)];

//Start with - for unanswered letters. Must be the length of the word.
let answerArray = [];

function getWordArr() {
  for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
  }
  for (let i = 0; i <= word.length; i++) {
    let w = document.getElementById("word");
    w.innerText = answerArray;
  }
}

// We need an input to guess a letter
let userGuess = [];

function getPrompt() {
  userGuess = document.getElementById("guess").value;
}

function hangMan() {
  getWordArr(characters);
}

function checkValue() {
  getPrompt();
  for (let i = 0; i <= word.length; i++) {
    if (word[i] === userGuess) {
      //I cant figure out how to insert the users guess in the answerArray!
    }
  }
}

hangMan();

//If that letter is not a match, we need to print 'Not a match'

//Must also keep track of attempts. 5 is a loss
