const path = require('path')

//base file name
console.log(path.basename(__filename))

//dirname
console.log(path.dirname(__filename))

//extension
console.log(path.extname(__filename))

//object
console.log(path.parse(__filename))

//object
console.log(path.join(__dirname, 'test', 'test.html'))