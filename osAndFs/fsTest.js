const fs = require('fs')

fs.writeFileSync('./main.js',`
const {currentOS} = require('./osTest.js')
console.log(currentOS)
`)

fs.appendFileSync('./main.js',`
console.log('added a line')
`)

fs.readFile('./main.js','utf-8',(err, data) => {
    if(err){
        console.log(err)
    }
    else{
        fs.writeFile('./main.js',data,(err) => {
            if(err){
                console.log(err)
            }
        })
    }
})