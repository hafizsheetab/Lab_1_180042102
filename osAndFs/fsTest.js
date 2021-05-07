const fs = require('fs')

fs.writeFileSync('./main.js',`
const {currentOS} = require('./osTest.js')
console.log(currentOS)
`)

fs.appendFileSync('./main.js',`
console.log('added a line')
`)