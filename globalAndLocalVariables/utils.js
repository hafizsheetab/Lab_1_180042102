const { name, hello } = require("./hello");

hello()
console.log(name)

setInterval(() => {
    hello()
}, 1000)

setTimeout(() => {
    console.log(name)
}, 5000)