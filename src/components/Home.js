import React from "react";
import "../components/CSS-files/Home.css"
import setting from "../images/parametres.png"
import users from "../images/utilisateur.png"
import dash from "../images/4-carres.png"
import sold from "../images/money-management.png"
import Navbar from "../components/Navbar"
import { Cotisation } from "./Feuilles-part/Cotisation";
import { Footer } from "./Feuilles-part/Footer";
import { Dashboard } from "./Feuilles-part/Dashboard";
import { Utilisateus } from "./Feuilles-part/Utilisateurs";

function HomeScreen() {

    return (
        <section>
            <div class="d-flex align-items-start">
                <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <h3>Bakéli Tontine</h3>

                    <button class="nav-link" id="v-pills-dashboard-tab" data-bs-toggle="pill" data-bs-target="#v-pills-dashboard" type="button" role="tab" >
                        <img src={dash} alt="dashimage" />
                        <p>Dashboard</p>
                    </button>
                    <button class="nav-link" id="v-pills-users-tab" data-bs-toggle="pill" data-bs-target="#v-pills-users" type="button" role="tab" >
                        <img src={users} alt="userIcon" />
                        <p>Utilisateurs</p>
                    </button>
                    <button class="nav-link" id="v-pills-sold-tab" data-bs-toggle="pill" data-bs-target="#v-pills-sold" type="button" role="tab" >
                        <img src={sold} alt="soldIcon" />
                        <p>Cotisations</p>
                    </button>
                    <button class="dropdown nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab">
                        <img src={setting} alt="settingimage" />
                        <p>Parametres</p>
                        <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">

                        </button>
                        <ul class="dropdown-menu flex-column nav-pill" id="v-pill-tab" role="tablist" aria-orientation="vertical">
                            <button class="dropdown-item nav-link" id="v-pills-paramG-tab" data-bs-toggle="pill" data-bs-target="#v-pills-paramG" type="button" role="tab" >
                                <p>Paramètres Géneraux</p>
                            </button>
                            <button class="dropdown-item nav-link" id="v-pills-utulisateurs-tab" data-bs-toggle="pill" data-bs-target="#v-pills-utulisateurs" type="button" role="tab" >
                                <p>Utulisateurs</p>
                            </button>
                            <button class="dropdown-item nav-link" id="v-pills-archives-tab" data-bs-toggle="pill" data-bs-target="#v-pills-archives" type="button" role="tab" >
                                <p>Archives</p>
                            </button>
                            <button class="dropdown-item nav-link" id="v-pills-membresB-tab" data-bs-toggle="pill" data-bs-target="#v-pills-membresB" type="button" role="tab" >
                                <p>Membres Bloqués</p>
                            </button>
                        </ul>
                    </button>
                </div>
                <div class="tab-content" id="v-pills-tabContent">
                    <Navbar />
                    <div class="tab-pane fade show active" id="v-pills-dashboard" role="tabpanel" aria-labelledby="v-pills-dashboard-tab" tabindex="0">
                        <Dashboard />
                    </div>
                    <div class="tab-pane fade" id="v-pills-users" role="tabpanel" aria-labelledby="v-pills-users-tab" tabindex="0">
                        <Utilisateus />
                    </div>
                    <div class="tab-pane fade" id="v-pills-sold" role="tabpanel" aria-labelledby="v-pills-sold-tab" tabindex="0">
                        <Cotisation />
                    </div>
                    <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabindex="0">...</div>

                    <Footer />
                </div>
            </div>
        </section>
    )
}
export default HomeScreen;