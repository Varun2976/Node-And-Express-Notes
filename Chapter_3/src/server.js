import express from 'express'
import path, {dirname} from 'path'
import { fileURLToPath } from 'url'
import authRoutes from './routes/authRoutes.js'

const app = express()
const PORT = process.env.PORT || 5200 // Here the 5200 becomes the backup port

const __filename = fileURLToPath(import.meta.url) //get the file path from the URL to the module
const __dirname = dirname(__filename) // Get the directory name from the file path

//Middleware
app.use(express())
app.use(express.static(path.join(__dirname,'../public')))

app.get('/' , (req,res) => {
    res.sendFile(path.join(__dirname ,'public' ,'index.html'))
})
app.use('/auth',authRoutes)
app.listen(PORT ,()=>{
    console.log(`Server started : ${PORT}`)
})