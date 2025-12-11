const { log } = require('console');
const os = require('os'); // no './' needed as this is a default module

const user = os.userInfo();
console.log(user); //gives u info about the pc user's main directory shell

console.log(`System uptime of this user is ${os.uptime()} seconds`) ; //gives you the time the system has been up for in seconds

const OS={
    ostype : os.type(), //What type of os
    release : os.release(), //What release version
    totalMem : os.totalmem(), // Total memory available
    freeMem : os.freemem(), // Free memory available
}

