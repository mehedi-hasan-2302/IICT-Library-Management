import { useState ,useEffect} from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { UseSelector, useSelector } from 'react-redux';
import { RootState } from './redux/ReduxStore';
import HomePage from './pages/HomePage/HomePage';


function App() {
  
  const loggedInUser = useSelector((state: RootState) => state.authentication.loggedInUser);

  useEffect(()=>{
    console.log(loggedInUser);
    return () => {
      console.log("component unmounted");
    }
  }, [loggedInUser])
  return (
    <div>
    <HomePage/>
  </div>
  )
}

export default App
