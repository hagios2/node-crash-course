// const Person = require('./person')

// first_person = new Person('Emmanuel Oteng Wilson', 40)

// first_person.greeting()

const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req, res) => {

    // if(req.url === '/')
    // {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content)=> {

    //         if(err) throw err
    //         res.writeHead(200, {'Content-Type': 'text/html'})
    //         res.end(content)
    //     })
    // }
  
    // if(req.url === '/about')
    // {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content)=> {

    //         if(err) throw err
    //         res.writeHead(200, {'Content-Type': 'text/html'})
    //         res.end(content)
    //     })
    // }

    // if(req.url === '/api/users')
    // {
    //     const users = [
    //         {name: "John Doe", age : 40},
    //         {name: "Petre Doe", age : 40},
    //         {name: "John Mark", age : 40},
    //         {name: "Petre French", age : 40}
    //     ]
        
    //     res.writeHead(200, {'Content-Type': 'application/json'})
    //     res.end(JSON.stringify(users))
    // }

    //Build file path

    let file_path = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)

    console.log(file_path);

    // get the etension of the file

    let extname = path.extname(file_path)

    //set the initial content type

    let contentType = 'text/html'

    //check ext and set content type

    switch(extname)
    {
        case '.js':
            contentType = 'text/javascript'
            break
        case '.css':
            contentType = 'text/css'
            break
        case '.json':
            contentType = 'application/json'
            break
        case '.png':
            contentType = 'image/png'
            break
        case '.jpg':
            contentType = 'text/javascript'
            break
    }

    fs.readFile(file_path, (err, content) => {

        if(err){

            if (err.code === 'ENOENT'){
                //PAGE NOT FOUND
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {

                    res.writeHead(200, {'Content-Type':'text/html'})
                    res.end(content, 'utf8')
                })
            }else{
                //some server error

                res.writeHead(500)
                res.end(`Server Error ${err.code}`)
            }
        }else{//success
            
            res.writeHead(200, {'Content-Type': contentType})
            res.end(content, 'utf8')
        }
    })
})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`server running on port ${PORT}`))