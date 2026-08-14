import express from 'express';
import "dotenv/config"
import cors from "cors"
import connectDB from './configs/db.js';

//initialize express app
const app = express()

//connect database
await connectDB()

//middleware
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => res.send("Server is Running"))

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is Running on port ${PORT}`))