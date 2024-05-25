import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './pages/HomePage/HomePage'
import { User } from './models/User'

function App() {
  const [displayLogin, setDisplayLogin] = useState<boolean>(true);
  const [loggedInUser, setLoggedInUser] = useState<User>();
  const updateLoggedInUser = (user:User) => {
    setLoggedInUser(user);
  }


  useEffect(()=>{
    console.log(loggedInUser);
    return () => {
      console.log("component unmounted");
    }
  }, [loggedInUser])
  return (
    <div>
    <HomePage displayLogin={displayLogin} updateLoggedInUser={updateLoggedInUser}/>
  </div>
  )
}

export default App
