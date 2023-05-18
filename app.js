import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import web from './routes/web.js';
import connectDB from './db/databaseConnection.js';
import {join} from 'path';
const app=express();
const port=process.env.PORT || '3000';
const DATABASE_URL=process.env.DATABASE_URL;

//database connection
connectDB(DATABASE_URL);

//use ejs
app.set('view engine', 'ejs');

//use static files
app.use(express.static(join(process.cwd(),'public')));

app.use(express.urlencoded({extended: false}));

//use foe routes
app.use('/',web);

app.listen(port,()=>{
    console.log(`listening on http://localhost:${port}`);
})