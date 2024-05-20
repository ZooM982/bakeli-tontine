import { signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import React, { useState } from "react";
import { auth } from "../FirebaseConfig";
import loginImg from "../../images/loginImg.png"
import '../Authentification/SignIn.css';

const SignIn = () => {

    const db = getFirestore();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(async (credentials) => {
                var ref = doc(db, "UserAutList", credentials.user.uid);
                const docSnap = await getDoc(ref);

                if (docSnap.exists()) {
                    sessionStorage.setItem("user-info", JSON.stringify({
                        firstname: docSnap.data().firstname,
                        lastname: docSnap.data().lastname,
                        email: docSnap.data().email
                    }))
                    sessionStorage.setItem("user-creds", JSON.stringify(credentials.user));


                }
            })
            .catch((error) => {
                alert(error.message);
                console.log(error.code);
                console.log(error.message);
            })
    };

    return (
        <div className="container-fluid">
            <div className="row sibg">
                <div className="left-sideIn">
                    <img src={loginImg} alt="login iamge" />
                </div>
                <div className=" right-sideIn">
                    <h2>Bienvenue sur Bakéli-tontine</h2>
                    <form id="loginForm" onSubmit={signIn} className="bg-light p-3 rounded-3 text-center">

                        <h4>connectez-vous</h4>
                        <p>connectez-vous et gerez vos cotisations</p>
                        <div className="mb-3">
                            <input type="email" className="form-control" value={email}
                                onChange={(e) => setEmail(e.target.value)} placeholder="N° télephone" />
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control" value={password}
                                onChange={(e) => setPassword(e.target.value)} placeholder="Mot de passe" />
                        </div>

                        <div className="mb-3 forget-password">
                            <a className="my-3" href="...">Mot de passe oublié ?</a>
                        </div>
                        <button type="submit" className="btn btn-submit" >Connexion</button>

                        <div className="mb-3 signIn">
                            <p>Vous n'avez pas de compte, <a href="...">inscrivez-vous!</a> </p>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    )
}

export default SignIn;