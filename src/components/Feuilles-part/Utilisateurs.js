import "../CSS-files/Utilisateurs.css"
import { ActifTable } from "./Tableau-utilisateus/ActifTable"
import { BloqueTable } from "./Tableau-utilisateus/BloqueTable"
import { TotalTable } from "./Tableau-utilisateus/TotalTable"
import stop from "../../images/panneau-stop.png"
import point from "../../images/bouton-denregistrement.png"


export const Utilisateus = () => {

    return (
        <section>
            <div className="container">
                <div className="row users">
                    <ul class="nav nav-pill mb-3" id="pill-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="pill-actif-tab" data-bs-toggle="pill" data-bs-target="#pill-actif" type="button" role="tab" aria-controls="pill-actif" aria-selected="true">
                                <p>Membres Actif <img src={point} alt="point" /> </p>
                                <h4>94 Membres</h4>
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pill-bloque-tab" data-bs-toggle="pill" data-bs-target="#pill-bloque" type="button" role="tab" aria-controls="pill-bloque" aria-selected="false">
                                <p>Membres Bloqué <img src={stop} alt="stop"/> </p>
                                <h4>6 Membres</h4>
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pill-total-tab" data-bs-toggle="pill" data-bs-target="#pill-total" type="button" role="tab" aria-controls="pill-total" aria-selected="false">
                                <p>Total Effectifs</p>
                                <h4>100 Membres</h4>
                            </button>
                        </li>
                    </ul>
                    <div className="Add-div">
                        <button className="btn Ajout">Ajouter</button>
                    </div>
                    <div class="tab-content " id="pill-tabContent">
                        <div class="tab-pane fade show active" id="pill-actif" role="tabpanel" aria-labelledby="pill-actif-tab" tabindex="0">
                            <ActifTable />
                        </div>
                        <div class="tab-pane fade" id="pill-bloque" role="tabpanel" aria-labelledby="pill-bloque-tab" tabindex="0">
                            <BloqueTable />
                        </div>
                        <div class="tab-pane fade" id="pill-total" role="tabpanel" aria-labelledby="pill-total-tab" tabindex="0">
                            <TotalTable />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}