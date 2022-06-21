import express from 'express';
import coors from 'cors';
import bodyParse  from 'body-parser';
import router from './routes/books.js';
import mongoose from 'mongoose';

const app = express();
//use es un middleware se ejecuta antes de la peticion
//el orden afecta al use
app.use(coors());
app.use(bodyParse.json());
app.use('/books',router);
mongoose.connect('mongodb+srv://book:book@cluster0.haztqcq.mongodb.net/?retryWrites=true&w=majority',(event)=>{
    console.log("Connected to DB");
}).catch(e => {
    console.log(e);
})
app.listen(4000);
