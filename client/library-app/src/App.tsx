import { useState ,useEffect} from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { UseSelector, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './redux/ReduxStore';
import HomePage from './pages/HomePage/HomePage';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import LayoutPage from './pages/LayoutPage/LayoutPage';
import { fetchUser } from './redux/slices/AuthententicationSlice';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import CatalogPage from './pages/CatalogPage/CatalogPage';


function App() {
  
  const loggedInUser = useSelector((state: RootState) => state.authentication.loggedInUser);
  const dispatch: AppDispatch = useDispatch();

  useEffect(()=>{
    let userId = localStorage.getItem("userId");

    if(userId && !loggedInUser){
      dispatch(fetchUser({
        userId,
        property: 'loggedInUser'
      }));
    }
  }, [loggedInUser])
  return (
      <BrowserRouter>
        <Routes>
          <Route path= "/" element = {<LayoutPage/>}>
          <Route path="" element = {<HomePage/>} /> 
            <Route path="/catalog" element = {<CatalogPage/>} />
            <Route path="/resource/:barcode" element = {<>Resource</>} />
            <Route path="/profile/:userId" element = {<ProfilePage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
