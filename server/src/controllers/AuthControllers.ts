import { Request, Response } from 'express';
import { register, login } from '../services/UserServices';
import { IUser } from '../models/User';
import { IUserModel } from '../daos/UserDao';
import { InvalidUsernameOrPasswordError } from '../utils/libraryErrors';

 const handleRegister = async (req:Request, res:Response) =>{

    const user:IUser = req.body;

    try{

        const registeredUser = await register(user);

        res.status(201).json({

            message:"User successfully created",
            user: {
                _id: registeredUser._id,
                type: registeredUser.type,
                firstName: registeredUser.firstName,
                lastName: registeredUser.lastName,
                email: registeredUser.email
            }

        })

    }catch(error:any){
        if(error.message.includes("E11000 duplicate key error collection:")){
            res.status(409).json({message: "User with this email already exists", error:error.message});
        }else{
            res.status(500).json({message:"Unable to register user at this time", error:error.message});
        }
        
    }

}


async function  handleLogin(req:Request, res:Response){
     const credentials = req.body;

     try {
        const loggedIn:IUserModel = await login(credentials);

        res.status(200).json({
            message:"User logged in successfully",
            user: {
                _id: loggedIn._id,
                type: loggedIn.type,
                firstName: loggedIn.firstName,
                lastName: loggedIn.lastName,
                email: loggedIn.email
            }
        })
        
     } catch (error:any) {

        if(error instanceof InvalidUsernameOrPasswordError ){
            res.status(401).json({message:"Unable to login user at this time", error:error.message});
        }else{

            res.status(500).json({message:"Unable to login user at this time!", error:error.message});
        }
        
     }
}

export default {handleRegister, handleLogin};