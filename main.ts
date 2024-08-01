#! /usr/bin/env node
import inquirer from 'inquirer';
const answer: {
    Sentence : "string"

} = await inquirer.prompt({
    name : "Sentence",
    type: "input",
    message: "Please enter your message or a paragraph for the word count:"
})
const word =answer.Sentence.trim().split(" ")
console.log(`The word count of your sentence is ${word.length}`)