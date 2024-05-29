import express, {Express, Request, Response} from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import {config} from './config';
import { registerRoutes } from './routes';


const PORT = config.server.port;

const app:Express = express();

app.use(express.json());
app.use(cors());


(async function startup(){
    try{

        await mongoose.connect(config.mongo.url, {w:"majority", retryWrites:true, authMechanism:"DEFAULT"});

        console.log("Connection to MongoDB successfully made");
       
        registerRoutes(app);
        
        app.listen(PORT, () =>{
            console.log(`Server is running on port ${PORT}`);
        });

    }catch(error){
        console.log("could not make a connection to the database!");
    }
})()


