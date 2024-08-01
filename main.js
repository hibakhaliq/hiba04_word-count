#! /usr/bin/env node

import inquirer from 'inquirer';
const answer = await inquirer.prompt({
    name: "Sentence",
    type: "input",
    message: "Please enter your message or a paragraph for thw word count:"
});
const word = answer.Sentence.trim().split(" ");
console.log(`The word count of your sentence is ${word.length}`);
