import React from "react";
import {  useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../redux/ReduxStore";

import './RegisterLibraryCardForm.css';
import { getLibraryCard } from "../../../../redux/slices/AuthententicationSlice";
import { setDisplayLibraryCard, setDisplayLogin } from "../../../../redux/slices/ModalSlice";

export const RegisterLibraryCardForm:React.FC = () => {
    const userState = useSelector((state:RootState) => state.authentication );
    const dispatch:AppDispatch = useDispatch();

    const handleCreateLibraryCard = () => {
        if(userState.loggedInUser){
            dispatch(
                getLibraryCard(userState.loggedInUser?._id)
            )
        }
    }

    const handleLoginClick = () => {
        dispatch(setDisplayLibraryCard(false));
        dispatch(setDisplayLogin(true));
    }

    return(
        <>
        {
            userState.loggedInUser? 
                <div className="register-library-card-container">
                    <h3 className="register-library-card-text"> welcome {userState.loggedInUser.firstName} {userState.loggedInUser.lastName}!</h3>
                    <h5  className="register-library-card-text">To singup for a new library card, or you forgot the ID number on your card, use the button below.</h5>
                    { 
                        userState.libraryCard ? <p className="register-library-card-text">Your Library Card Number: {userState.libraryCard}</p> :
                        <button className="register-library-modal-button" onClick={handleCreateLibraryCard}>Get Library Card</button>
                    }
                </div>
                : 
                <div className="register-library-card-container">
                    <h3 className="register-library-card-text">You must be a member of the library card. </h3>
                    <h4 className="register-library-card-text">Use the button to login to your account or register for free.</h4>
                    <button className="register-library-modal-button" onClick={handleLoginClick}>Login Here </button>
                </div>
        }
        </>
    )

}
