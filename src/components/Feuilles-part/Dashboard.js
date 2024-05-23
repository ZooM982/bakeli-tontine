import sold from "../../images/money-management (2).png"
import courbe from "../../images/courbe.png"
import stats from "../../images/stats.png"
import "../CSS-files/Dashboard.css"

export const Dashboard = () => {

    return (
        <section>
            <div className="container">
                <div className="row dash">
                    <div className="dash-left">
                        <div className="dash-left-up d-flex">
                            <div className="card">
                                <p>Juin</p>
                                <h3>225.000 FCFA</h3>
                                <span className="text-muted">Nombre de cotisation:23</span>
                            </div>
                            <div className="card">
                                <p>Mai</p>
                                <h3>100.000 FCFA</h3>
                                <span className="text-muted">Nombre de cotisation:27</span>
                            </div>
                        </div>
                        <div className="dash-left-middle">
                            <div className="card">
                                <div className="card-head">
                                    <p>Evolution des cotisation en fonction de temps</p>
                                </div>
                                <div className="card-body">
                                    <img src={courbe} alt="courbe" />
                                </div>
                            </div>
                        </div>
                        <div className="dash-left-down">
                            <h3>Juin</h3>
                            <div className="card">
                                <table>
                                    <thead>
                                        <th>Membres</th>
                                        <th>Montant</th>
                                        <th>Date début</th>
                                        <th>Statut</th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Selena Roy</td>
                                            <td>200.000 FCFA</td>
                                            <td>01/01/2022</td>
                                            <td className="valid-stat">Validé</td>
                                        </tr>
                                        <tr>
                                            <td>Emma Watson</td>
                                            <td>200.000 FCFA</td>
                                            <td>01/01/2022</td>
                                            <td className="valid-stat">En Attente</td>
                                        </tr>
                                        <tr>
                                            <td>John Robert</td>
                                            <td>200.000 FCFA</td>
                                            <td>01/01/2022</td>
                                            <td className="valid-stat">Validé</td>
                                        </tr>
                                        <tr>
                                            <td>Anne hathaway</td>
                                            <td>200.000 FCFA</td>
                                            <td>01/01/2022</td>
                                            <td className="valid-stat">En Attente</td>
                                        </tr>
                                        <tr>
                                            <td>Ravi shankar </td>
                                            <td>200.000 FCFA</td>
                                            <td>01/01/2022</td>
                                            <td className="valid-stat">Validé</td>
                                        </tr>
                                        <tr>
                                            <td>Emma Stone </td>
                                            <td>200.000 FCFA</td>
                                            <td>01/01/2022</td>
                                            <td className="valid-stat">Validé</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="dash-right">
                        <div className="dash-right-up">
                            <div className="card">
                                <div className="left-card">
                                    <img src={sold} alt="sold" />
                                </div>
                                <div className="right-card">
                                    <p>Caisse</p>
                                    <p> <span className="text-muted">3.500.000</span>/5.000.000 </p>
                                    <div className="progress" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar w-75"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dash-right-middle">
                            <div className="card">
                                <div className="card-head">
                                    <p>statistiques</p>
                                </div>
                                <div className="card-body">
                                    <img src={stats} alt="stats" />
                                    <div className="stast-colors">
                                    <div className="stast-colors-1 mx-auto">Terminé</div>
                                    <div className="stast-colors-2 mx-auto">En cours</div>
                                    <div className="stast-colors-3 mx-auto">Archivé</div>
                                    <div className="stast-colors-4 mx-auto">Bloqué</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dash-right-down">
                            <h3>Top progression</h3>
                            <div className="card">
                                <table>
                                    <thead>
                                        <th>Membres</th>
                                        <th>Date début</th>
                                        <th>Progression</th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Selena Roy</td>
                                            <td>01/01/2022</td>
                                            <td>
                                                <div className="progress" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                                    <div className="progress-bar w-100"></div>
                                                    <p>100%</p>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Emma Watson</td>
                                            <td>01/01/2022</td>
                                            <td>
                                                <div className="progress" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                                    <div className="progress-bar w-100"></div>
                                                    <p>100%</p>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>John Robert</td>
                                            <td>01/01/2022</td>
                                            <td>
                                                <div className="progress" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                                    <div className="progress-bar w-75"></div>
                                                    <p>75%</p>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Anne hathaway</td>
                                            <td>01/01/2022</td>
                                            <td>
                                                <div className="progress" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                                    <div className="progress-bar w-75"></div>
                                                    <p>75%</p>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Ravi shankar </td>
                                            <td>01/01/2022</td>
                                            <td>
                                                <div className="progress" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                                    <div className="progress-bar w-50"></div>
                                                    <p>65%</p>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Emma Stone </td>
                                            <td>01/01/2022</td>
                                            <td>
                                                <div className="progress" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                                    <div className="progress-bar w-50"></div>
                                                    <p>65%</p>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}