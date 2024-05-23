import oeil from "../../images/oeil.png"
import "../CSS-files/Cotisation.css"

export const Cotisation = () => {

    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="cotisationUp">
                        <div className="card">
                            <p>Juin</p>
                            <h3>225.000 FCFA</h3>
                        </div>
                        <div className="card">
                            <p>Mai</p>
                            <h3>100.000 FCFA</h3>
                        </div>
                        <div className="card">
                            <p>Total caisse</p>
                            <h3>3.500.000 FCFA</h3>
                            <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar w-75"></div>
                            </div>
                            <span className="text-muted">77% du seuil</span>
                        </div>
                    </div>
                    <div className="cotisationDown">
                        <div className="card">
                            <table>
                                <thead>
                                    <th>Membres</th>
                                    <th>Date début</th>
                                    <th>Montant cotisé</th>
                                    <th>Montant restant</th>
                                    <th>Action</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Selena Roy</td>
                                        <td>01/01/2022</td>
                                        <td>200.000 FCFA</td>
                                        <td>100.000 FCFA</td>
                                        <td>
                                            <button type="submit" className="btn">
                                                <img src={oeil} alt="oeil" />
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Emma Watson</td>
                                        <td>01/01/2022</td>
                                        <td>200.000 FCFA</td>
                                        <td>100.000 FCFA</td>
                                        <td>
                                            <button type="submit" className="btn">
                                                <img src={oeil} alt="oeil" />
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>John Robert</td>
                                        <td>01/01/2022</td>
                                        <td>200.000 FCFA</td>
                                        <td>100.000 FCFA</td>
                                        <td>
                                            <button type="submit" className="btn">
                                                <img src={oeil} alt="oeil" />
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Anne hathaway</td>
                                        <td>01/01/2022</td>
                                        <td>200.000 FCFA</td>
                                        <td>100.000 FCFA</td>
                                        <td>
                                            <button type="submit" className="btn">
                                                <img src={oeil} alt="oeil" />
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Ravi shankar </td>
                                        <td>01/01/2022</td>
                                        <td>200.000 FCFA</td>
                                        <td>100.000 FCFA</td>
                                        <td>
                                            <button type="submit" className="btn">
                                                <img src={oeil} alt="oeil" />
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Emma Stone </td>
                                        <td>01/01/2022</td>
                                        <td>200.000 FCFA</td>
                                        <td>100.000 FCFA</td>
                                        <td>
                                            <button type="submit" className="btn">
                                                <img src={oeil} alt="oeil" />
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}