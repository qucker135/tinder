import { useRef, useContext } from "react";
import SignInContext from "../Contexts/SignInContext";

const SignIn = () => {
    const [loggedUser, setLoggedUser] = useContext(SignInContext);
    
    const loginRef = useRef();
    const passRef = useRef();

    console.log(loggedUser);

    const handleLoggingIn = () => {
        //console.log(loginRef.current.value);
        //console.log(passRef.current.value);

        setLoggedUser(loginRef.current.value);
    }

    const handleLoggingOut = () => {
        setLoggedUser("");
    }

    if(loggedUser === ""){
        return (
            <>
                <label htmlFor="login">Login: </label>
                <input name="login" ref={loginRef}/> <br/>
                <label htmlFor="passwd">Hasło: </label>
                <input name="passwd" ref={passRef}/> <br/>
                <button onClick={handleLoggingIn}>Zaloguj się</button>
            </>
        );
    }
    else{
        return (
            <>
                <h2>Zalogowany użytkownik: {loggedUser}</h2><br/>
                <button onClick={handleLoggingOut}>Wyloguj się</button>
            </>
        )
    }
}

export default SignIn;