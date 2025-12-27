const express = require('express')
const PORT = 5383
const app = express()
let data = {
    name : "varun"
}
app.get('/' , (req,res) => {
    
    res.send('<h1>This is Homepage</h1>') // First response method -> Send Status - > Send the status of the server depending on the status code which in this case is 200

}); 
app.get('/about' ,(req,res) => {
    res.send(`
        <body style ="background-color : blue ; color : black" >
            <h1>DATA TIMEEE !!!!</h1>
            <p>${JSON.stringify(data)}</p>
        </body>
        
        `);
})



//Type 2 - API Endpoints

app.get('/app/data' , (req,res) => {
    console.log('This is for the data part , rest api')
    res.send(data);
    const newEntry = req.body() //request to access data from the body
    res.sendStatus(201) // The created status
})

app.listen(PORT, () => console.log(`Server has started at ${PORT}`))