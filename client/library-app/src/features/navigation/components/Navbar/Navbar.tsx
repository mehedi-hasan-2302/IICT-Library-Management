import React,{useRef} from "react";
import { Link, useNavigate } from "react-router-dom";

import './Navbar.css';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/ReduxStore"; 
import { AppDispatch } from "../../../../redux/ReduxStore";
import { setDisplayLogin } from "../../../../redux/slices/ModalSlice";
import { Book, Search } from "@mui/icons-material";


export const Navbar:React.FC = () => {

    const searchRef = useRef<HTMLInputElement>(null);
    const authState = useSelector((state:RootState) => state.authentication);

    const navigate = useNavigate();
    const dispatch:AppDispatch = useDispatch();

    const handleEnterKey = (e:React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter' && searchRef && searchRef.current && searchRef.current.value.length > 0  ) {
            navigate(`/catalog?barcode=${searchRef.current.value}&title=${searchRef.current.value}&description=${searchRef.current.value}`);
            searchRef.current.value = '';
        }
    }

    const handleSearchIconClicked = () => {
        if(searchRef && searchRef.current && searchRef.current.value.length > 0){
            navigate(`/catalog?barcode=${searchRef.current.value}&title=${searchRef.current.value}&description=${searchRef.current.value}`);
            searchRef.current.value = '';
        }
    }

    const navigateToProfile = () => {
        if(authState.loggedInUser) navigate(`/profile/${authState.loggedInUser._id}`);
    }
    const toggleLogin = () => {
        dispatch(setDisplayLogin(true));
    }

    return(
        <nav className="navbar">
            <Link to = "/" className="navbar-logo-section">
                <Book sx = {
                    {
                        fontSize: "3rem"
                    }
                } />
                <h1>IICT Library,SUST</h1>
            </Link>
            <div className="navbar-option-section">
                <div className="navbar-search-box">
                    <input className="navbar-search-input" placeholder="Search Books" onKeyDown={handleEnterKey} ref={searchRef}/>
                    <Search onClick = {handleSearchIconClicked}
                        sx = {{
                            cursor: "pointer",
                            fontSize: "2rem"
                        }}
                    />
                </div>
                <Link to="/catalog" className="navbar-option navbar-link">
                    <h2>All Books</h2>
                </Link>
                    {
                        authState.loggedInUser ?
                        <div className="navbar-option" onClick={navigateToProfile}>
                            <h2>{authState.loggedInUser.firstName} {authState.loggedInUser.lastName}</h2>
                        </div>
                        : 
                        <div className="navbar-option" onClick={toggleLogin}>
                            <h2>Login</h2>
                        </div>
                    }
            </div>
        </nav>
    )
} 