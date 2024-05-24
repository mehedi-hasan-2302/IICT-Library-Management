import { LoginFrom } from "../../features/authentication/components/LoginForm/LoginForm"
import { User } from "../../models/User"

interface HomePageProps{
    displayLogin: boolean,
    updateLoggedInUser(user:User): void
}


export default function HomePage(props: HomePageProps):JSX.Element{
    return(
        <div className="page">
            Home Page
            {props.displayLogin ? <LoginFrom updateLoggedInUser={props.updateLoggedInUser}/> :<></> }
        </div>
    )
}