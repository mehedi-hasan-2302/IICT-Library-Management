import React,{useRef, useState} from "react";
import './LoginFrom.css';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch,RootState } from "../../../../redux/ReduxStore"; 
import { loginUser } from "../../../../redux/slices/AuthententicationSlice";
import { User } from "../../../../models/User";


interface LoginFormProps{
    toggleRegister(): void;
}

export const LoginFrom:React.FC<LoginFormProps> = ({toggleRegister})=> {

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const auth = useSelector((state: RootState) => state.authentication);
    const dispatch:AppDispatch = useDispatch();
    const handleLoginUser = async (e:React.MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault();
        if(emailRef && emailRef.current && passwordRef && passwordRef.current){
            dispatch(loginUser({
                email: emailRef.current.value,
                password: passwordRef.current.value
            }));
        }
    }


    return <form className = "login-form">
        <h2>please login</h2>
        {auth.error ? <p className="login-form-error">invalid email or password</p> : <> </>}
        <div className="login-form-input-group"> 
        <h6>Email</h6>
        <input className="login-form-input" placeholder="email" name="email" required ref={emailRef}/>
        </div>

        <div className="login-form-input-group"> 
        <h6>Password</h6>
        <input className="login-form-input" placeholder="password" name="password" required ref={passwordRef}/>
        </div>

        <button className="login-form-submit" onClick={handleLoginUser}> Login </button>
        <p>
            Don't have an account? 
            <span className="login-form-register" onClick={toggleRegister}>
                Create Account.
            </span>
        </p>

    </form>
}