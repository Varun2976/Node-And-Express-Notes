const http = require('http');

const server = http.createServer((req,res) =>{
    if(req.url === '/'){
        res.end(`Welcome to the homepage`)
    }
    if(req.url === '/about'){
        res.end(`Hello everybody this is an about page`)
    }
    res.end(`<h1>Sorry couldnt find the file u were looking for</h1>
        <p> Pls do come again later and check</p>`)
})

server.listen(5600) // 5800 is the number after localhost ..... localhost:5800

