import { useDispatch, useSelector } from "react-redux";
import { Modal } from '../../../../components'
import './LoginRegisterModal.css';
import { AppDispatch,RootState } from "../../../../redux/ReduxStore";
import { useEffect, useState } from "react";
import { setDisplayLogin } from "../../../../redux/slices/ModalSlice";
import { LoginFrom } from "../LoginForm/LoginForm";

export const LoginRegisterModal:React.FC = () => {
    const authState = useSelector((state:RootState) => state.authentication);
    const dispatch: AppDispatch = useDispatch();
    const [login, setLogin] = useState<boolean>(true);

    const closeModal = () => {
        dispatch(setDisplayLogin(false));
    }

    const toggleLogin = () => {
        setLogin(!login);
    }

    useEffect(() => {
        if(authState.loggedInUser){
            closeModal();
        }

        return(() => {
            if(authState.loggedInUser){
                localStorage.setItem('userID', authState.loggedInUser._id);
            }
        })
    }, [authState.loggedInUser]); 

    return(
        <Modal
            content = {login? <LoginFrom toggleRegister = {toggleLogin}/> : <></>}
            toggleModal = {closeModal}
            />
    )
}