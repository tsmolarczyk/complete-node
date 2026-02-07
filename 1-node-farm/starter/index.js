const fs = require('fs')

const inputTxt = fs.readFileSync('./txt/name.txt', 'utf-8')
console.log(inputTxt)

