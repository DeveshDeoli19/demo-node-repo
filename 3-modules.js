//CommonJs every file is a module(by default)(in node.js)
//Modules - Encapsulated code (only share minimum)

//accessing module

const names = require('./4-firstModuleNames')
const sayHi = require('./5-util')
const alternative = require('./6-alternativeSyntax')

// console.log(alternative)
// console.log(names)
// sayHi('Peter\n')
// sayHi(names.john+'\n')
// sayHi(names.susan+'\n')
// sayHi(names.devesh+'\n')

//mindGrenade

//direct access
// require('./7-mindGrenade')

const mindGrenade = require('./7-mindGrenade')
// console.log(mindGrenade)
mindGrenade()