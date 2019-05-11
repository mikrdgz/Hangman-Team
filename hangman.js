"use strict";

const characters = ["Thor", "Spiderman", "Starlord", "Hulk", "Rocket"];

//generate hangman word

function getWord(arr) {
  let word = arr[Math.floor(Math.random() * arr.length)];
  console.log(word);


  let answerArray = [];
 for (let i = 0; i < word.length; i++) {
   answerArray[i] = "_";
 }
 for (let i = 0; i <= word.length; i++) {
    let w = document.getElementById("word");
    w.innerText = answerArray;
  }
}

// We need an input to guess a letter

function getPrompt() {}

function hangMan() {
  getWord(characters);
}

hangMan();

//Start with - for unanswered letters. Must be the length of the word.

//If that letter is not a match, we need to print 'Not a match'

//Must also keep track of attempts. 5 is a loss
