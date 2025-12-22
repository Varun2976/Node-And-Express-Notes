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
    res.send('<h1>This is about page</h1>');
})

//Type 2 - API Endpoints

app.get('/app/data' , (req,res) => {
    console.log('This is for the data part , rest api')
    res.send(data);
})

app.listen(PORT, () => console.log(`Server has started at ${PORT}`))