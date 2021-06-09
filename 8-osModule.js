const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user);
//method return the system's uptime in seconds
console.log(`The System's uptime is ${os.uptime()} seconds`);


const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
}

console.log(currentOs)