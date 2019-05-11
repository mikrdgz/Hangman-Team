"use strict";

const characters = ["Thor", "Spiderman", "Starlord", "Hulk", "Rocket"];

// generate hangman word

function getWord(arr) {
  let word = arr[Math.floor(Math.random() * arr.length)];


  for (let i = 0; i <= word.length; i++) {
      getElementByID("word").innerHTML = "-";
  }
}

function hangMan() {
  getWord(characters);
}

hangMan();

//Start with - for unanswered letters. Must be the length of the word.

// We need an input to guess a letter

function getPrompt() {}

//If that letter is not a match, we need to print 'Not a match'

//Must also keep track of attempts. 5 is a loss
