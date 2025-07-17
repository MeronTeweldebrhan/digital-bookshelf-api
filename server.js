import express from 'express'
import db from './db/connection.js'
import dotenv from 'dotenv'
import bookRoutes from './routes/bookRoutes.js'
import userRoutes from './routes/userRoutes.js'

dotenv.config()
const app =express()

app.use(express.json())

const PORT=process.env.PORT ||6000
   db()


app.use('/api/book',bookRoutes)
app.use('/api/user',userRoutes)

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})