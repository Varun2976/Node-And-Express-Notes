import express from 'express'

const app = express()
const PORT = process.env.PORT || 5200 // Here the 5200 becomes the backup port

app.listen(PORT ,()=>{
    console.log(`Server started : ${PORT}`)
})