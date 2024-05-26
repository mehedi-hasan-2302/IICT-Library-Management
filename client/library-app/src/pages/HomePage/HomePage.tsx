import { LoginFrom } from "../../features/authentication/components/LoginForm/LoginForm"
import { User } from "../../models/User"

export default function HomePage():JSX.Element{
    return(
        <div className="page">
            Home Page
            <LoginFrom />
        </div>
    )
}