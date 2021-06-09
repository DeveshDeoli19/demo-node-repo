const { readFileSync, writeFileSync } = require('fs')

console.log('Start')
//to read file
const first = readFileSync('./content/first.txt', 'utf-8');
console.log('\n' + first)
const second = readFileSync('./content/second.txt', 'utf-8');
console.log('\n' + second + '\n')


//to write file
//if not there create one
//if there then it will overwrite the existing file
//takes two parameters filename and data to be written.
writeFileSync('./content/resultSync.txt', `Here is the result:\n ${first} \n ${second}\n`,{flag:'a'}); //to append text use flag:a

const resultSync = readFileSync('./content/resultSync.txt', 'utf-8');
console.log('\n' + resultSync + '\n')

console.log('Start new task')
