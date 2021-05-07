const os = require('os')
console.log(os.userInfo())

exports.currentOS = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem()
}

