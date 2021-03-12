const fs = require('fs')

const path = require('path')

//crate a folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if (err) throw err;
//     console.log('File created successfully')
// });


//create and write to file
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Testing a write to file', err => {
    if (err) throw err;
    console.log('Written to file')
});