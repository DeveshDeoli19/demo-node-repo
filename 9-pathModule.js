const path = require('path')
console.log(path.sep) //separator


// console.log(path.join('/content','second.txt'))
// const base = path.basename(path.join('/content','second.txt'))
// console.log(base)

const absolutePath = path.resolve(__dirname,'content','second.txt')
console.log(absolutePath)