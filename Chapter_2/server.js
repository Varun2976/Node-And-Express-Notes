const express = require('express')
const PORT = 5383
const app = express()
app.use(express.json()); // Middleware , invokes the express , configure our server to invoke json as a request
let data = ["Varun"]
app.get('/' , (req,res) => {
    
    res.send('<h1>This is Homepage</h1>') // First response method -> Send Status - > Send the status of the server depending on the status code which in this case is 200

}); 
app.get('/about' ,(req,res) => {
    res.send(`
        <body style ="background-color : yellow ; color : black" >
            <h1>DATA TIMEEE !!!!</h1>
            <p>${JSON.stringify(data)}</p>
        </body>
        
        `);
})



//Type 2 - API Endpoints

app.get('/api/data' , (req,res) => {
    console.log('This is for the data part , rest api')
    
    const newEntry = req.body //request to access data from the body
    res.sendStatus(201) // The created status
})

app.post('/api/data' , (req,res) => {
    const newEntry = req.body //When one presses sign up button the browser sends a request and that tells the server what to do
    data.push(newEntry.name) // pushes the name in data
    res.sendStatus(201)
})

app.delete('/api/data' , (req,res) => {
    const newEntry = req.body
    data.pop()
    console.log(`Deleted the end value`)
})

app.listen(PORT, () => console.log(`Server has started at ${PORT}`))