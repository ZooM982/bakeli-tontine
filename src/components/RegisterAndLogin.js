import SignIn from "./Authentification/SignIn";
import SignUp from "./Authentification/SignUp";


function RegisterAndLogin() {
   
    return (
        <div className="App">
            <SignIn />
            <SignUp />
        </div>
    );
}
export default RegisterAndLogin;