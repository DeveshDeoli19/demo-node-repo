const { readFile, writeFile } = require('fs');

console.log('Start');
//filepath, encoding and callback function
readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result;
        
        //filePath, data, callback
        writeFile('./content/resultAsync.txt', `Here is the result: \n${first} \n ${second}\n`, (err, result) => {
            if (err) {
                console.log(err)
                return
            }
            console.log('Successfully created')
        })
    })


})

for (let i = 0; i < 5; i++) {
    console.log('Start New task');
}