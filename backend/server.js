import express from 'express'
import cors from 'cors'
import {connectDb} from './utils/connectdb.js'
import {User} from './models/userData.js'
import dotenv from 'dotenv'

dotenv.config();

const port = 4000;
const app = express();

app.use(cors());
app.use(express.json());

connectDb();

app.post('/getData', async(req, res) =>{
   const {name, email, phone, msg} = req.body;
   try {
    const userMessage = await User.create({
        name,email,phone,msg
    })
    console.log(userMessage);
    res.status(201).json({msg: 'Data Received'})

   } catch (error) {
    console.log(error);
    res.status(400).json({error: error.message})
   }
   
})

app.listen(port, () => {
    console.log('Server started')
})