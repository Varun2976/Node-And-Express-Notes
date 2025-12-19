const express = require('express')
const PORT = 5383
const app = express()
app.get('/' , (req,res) => {
    console.log("System endpoint reached." , req.method);
    res.sendStatus(200); // First response method -> Send Status - > Send the status of the server depending on the status code which in this case is 200

}); // 
app.listen(PORT, () => console.log(`Server has started at ${PORT}`))