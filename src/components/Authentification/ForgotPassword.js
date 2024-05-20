import { sendPasswordResetEmail } from "firebase/auth";
import React from "react";
import { auth } from "../FirebaseConfig";
import { useNavigate } from "react-router-dom";
import "../Authentification/ForgotPassword.css"
import ForgotImg from "../../images/forgotpwrd.png"

function ForgotPassword() {
    const history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        const emalVal = e.target.email.value;
        sendPasswordResetEmail(auth, emalVal).then(data => {
            alert("Check your gmail")
            history("/")
        }).catch(err => {
            alert(err.code)
        })
    }
    return (
        <div className="App">
            <div className="left-side">
                <img src={ForgotImg} alt="..." />
            </div>
            <div className="right-side">
                <div className="cadre">
                    <h1>Mot de passse oublié</h1>
                    <p>Pour réinitialiser votre mot de passe entrez votre e-mail ou votre numéro de téléphone</p>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <input name="email" placeholder="N° de téléphone ou e-mail" /><br /><br />
                        <button type="submit" className="btn-forget">Envoyer</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default ForgotPassword;