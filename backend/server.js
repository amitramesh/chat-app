import express from 'express';
import dotenv from 'dotenv';
import authRoute from './routes/auth.route.js';
import connectDB from './lib/db/db.js'

dotenv.config();
const app = express();
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Welcome to Chat Application")
});

app.use("/api/auth/",authRoute);

app.listen(3000,()=>{
    connectDB();
    console.log("Server is running PORT ",process.env.PORT);
});

