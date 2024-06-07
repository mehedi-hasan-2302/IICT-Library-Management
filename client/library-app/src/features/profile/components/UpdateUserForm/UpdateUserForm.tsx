import React, {useState, useEffect} from "react";

import { UseDispatch, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../redux/ReduxStore";
import { Create } from "@mui/icons-material";
import { buttonBaseClasses } from "@mui/material";
import { User } from "../../../../models/User";
import { useNavigate } from "react-router-dom";
import { resetUser, updateUser } from "../../../../redux/slices/AuthententicationSlice";

export const UpdateUserForm:React.FC = () => {
    const userState = useSelector((state:RootState) => state.authentication);
    const dispatch:AppDispatch = useDispatch();

    const [displayUpdate, setDisplayUpdate] = useState<boolean>(false);
    const [user, setUser] = useState<User | undefined>();
    const navigate = useNavigate();

    const updateUserState = (e:React.ChangeEvent<HTMLInputElement>) => {
        setDisplayUpdate(true);
        if(e.target.value && e.target.name && user){

        setUser({
        ...user,
        [e.target.name]: e.target.value
                });        
        }
    }

    const submitUpdatedUser = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if(user) dispatch(updateUser(user));
        setDisplayUpdate(false);
    }

    const logout = (e:React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            localStorage.removeItem("userId");
            dispatch(resetUser("loggedInUser"));
            dispatch(resetUser("profileUser"));
            navigate("/");
        }
    
        useEffect(() => {
            if(userState.profileUser){
                setUser(JSON.parse(JSON.stringify(userState.profileUser)));
            }
        }, [userState.profileUser?._id])
    return(
        <form className="update-user-form">
            <div className="update-user-input-group">
                <h4>First Name :</h4>
                <input className="update-user-input" name="firstName" value={user?.firstName} onChange={updateUserState}
                disabled={userState.loggedInUser?._id != userState.profileUser?._id}/>
                {userState.loggedInUser?._id === userState.profileUser?._id && <Create sx={{
                    position: 'absolute',
                    top: '65%',
                    right: '0'
                }} />}
            </div>
            <div className="update-user-input-group">
                <h4>Last Name :</h4>
                <input className="update-user-input" name="lastName" value={user?.lastName} onChange={updateUserState}
                disabled={userState.loggedInUser?._id != userState.profileUser?._id}/>
                {userState.loggedInUser?._id === userState.profileUser?._id && <Create sx={{
                    position: 'absolute',
                    top: '65%',
                    right: '0'
                }} />}
            </div>
            <div className="update-user-input-group">
                <h4>Email :</h4>
                <input className="update-user-input" name="email" value={user?.email} onChange={updateUserState}
                disabled={userState.loggedInUser?._id != userState.profileUser?._id}/>
                {userState.loggedInUser?._id === userState.profileUser?._id && <Create sx={{
                    position: 'absolute',
                    top: '65%',
                    right: '0'
                }} />}
            </div>
            {displayUpdate ? <button className="profile-button" onClick={submitUpdatedUser}> Update Profile</button> : <></> } 
            {userState.loggedInUser?._id === userState.profileUser?._id ? <button className="profile-button" onClick={logout}>Logout Of Account</button> : <></>}
        </form>
    )

}