'use strict';

const characters = [
    "Thor"
]

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getPrompt() {
    // game.board.viewGrid();
    rl.question('Guess: ', () => {
    });
  }
  getPrompt();

//Start with - for unanswered letters. Must be the length of the word.

// We need an input to guess a letter

//If that letter is a match in the word, then we replace dashes with that letter

//If that letter is not a match, we need to print 'Not a match'

//Must also keep track of attempts. 5 is a loss
