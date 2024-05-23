/* eslint-disable jsx-a11y/anchor-is-valid */
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { auth } from "../FirebaseConfig";
import signupImg from "../../images/signupImg.png"
import '../Authentification/SignUp.css';
import { useNavigate } from 'react-router-dom';



const SignUp = () => {

    const db = getFirestore();

    let FnameInp = document.getElementById("fnameInp")
    let LnameInp = document.getElementById("lnameInp")
    let Tel = document.getElementById("telInp")
    let Birth = document.getElementById("dateInp")
    let Organisation = document.getElementById("organisationInp")
    let Profession = document.getElementById("professionInp")
    let Adresse = document.getElementById("adresseInp")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const history = useNavigate();



    const RegisterUser = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(async (credentials) => {
                var ref = doc(db, "UserAutList", credentials.user.uid);
                await setDoc(ref, {
                    firstname: FnameInp.value,
                    lastname: LnameInp.value,
                    tel: Tel.value,
                    birthdate: Birth.value,
                    Organisation: Organisation.value,
                    Profession: Profession.value,
                    Adresse: Adresse.value,
                    email: email,
                    password: password
                });
                history("/SignIn");
            })
            .catch((error) => {
                alert(error.message);
                console.log(error.code);
                console.log(error.message);
            })

        if (true) {
            window.alert("Compte créer avec succèes, Merci")
        } else {
            window.alert("Compte non créer")
        }
    }


    return (
        <div className="container-fluid">
            <div className="row sibg">
                <div className="left-sideUp">
                    <img src={signupImg} alt="login iamge" />
                </div>
                <div className=" right-sideUp">
                    <form id="loginForm" onSubmit={RegisterUser} className="bg-light p-3 rounded-3 text-center">
                        <h4>Inscription</h4>
                        <div className="form-body">
                            <div className="form-left-side">
                                <div className="mb-1">
                                    <label for="">Nom</label>
                                    <input type="text" className="form-control" id="fnameInp" />
                                </div>
                                <div className="mb-1">
                                    <label for="">Date de naissance</label>
                                    <input type="date" className="form-control" id="dateInp" />
                                </div>
                                <div className="mb-1">
                                    <label for="">Definir mot de passe</label>
                                    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div className="mb-1">
                                    <label for="">Email</label>
                                    <input type="mail" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="mb-1">
                                    <label for="">Adresse</label>
                                    <input type="text" className="form-control" id="adresseInp" />
                                </div>
                            </div>

                            <div className="form-right-side">
                                <div className="mb-1">
                                    <label for="">Prénom</label>
                                    <input type="text" className="form-control" id="lnameInp" />
                                </div>
                                <div className="mb-1">
                                    <label for="">profession</label>
                                    <input type="text" className="form-control" id="professionInp" />
                                </div>
                                <div className="mb-1">
                                    <label for="">confirmer mot de passe</label>
                                    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div className="mb-1">
                                    <label for="">Téléphone</label>
                                    <input type="number" className="form-control" id="telInp" />
                                </div>
                                <div className="mb-1">
                                    <label for="">Organisation</label>
                                    <input type="text" className="form-control" id="organisationInp" />
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-submit" >S'inscrire</button>

                        <div className="mb-1 signIn">
                            <p>Vous avez déjà un compte, <a onClick={() => navigate('/')}>connectez-vous!</a> </p>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    )
}

export default SignUp;