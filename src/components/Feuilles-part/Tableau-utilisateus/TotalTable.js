import oeil from "../../../images/oeil.png"
import "../../CSS-files/Utilisateurs.css"
import stop from "../../../images/panneau-stop.png"
import stop2 from "../../../images/panneau-stop (1).png"

export const TotalTable = () => {

    return (
        <div className="card Total">
            <table>
                <thead>
                    <th>Membres</th>
                    <th>Date début</th>
                    <th>Seuil</th>
                    <th>Progression</th>
                    <th>Statut</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Selena Roy</td>
                        <td>01/01/2022</td>
                        <td>300.000 FCFA</td>
                        <td>
                            <div className="progress" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar w-100"></div>
                            </div>
                        </td>
                        <td><span>Terminé</span></td>
                        <td className="icons-btn">
                            <button type="submit" className="btn icons-btn">
                                <img src={oeil} alt="oeil" />
                            </button>
                            <button type="submit" className="btn icons-btn">
                                <img src={oeil} alt="oeil" />
                            </button>
                            <button type="submit" className="btn icons-btn">
                                <img src={stop2} alt="oeil" />
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>Emma Watson</td>
                        <td>01/01/2022</td>
                        <td>300.000 FCFA</td>
                        <td>
                            <div className="progress" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar w-100"></div>
                            </div>
                        </td>
                        <td>En cours</td>
                        <td className="icons-btn">
                            <button type="submit" className="btn icons-btn">
                                <img src={oeil} alt="oeil" />
                            </button>
                            <button type="submit" className="btn icons-btn">
                                <img src={oeil} alt="oeil" />
                            </button>
                            <button type="submit" className="btn icons-btn">
                                <img src={stop} alt="oeil" />
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>John Robert</td>
                        <td>01/01/2022</td>
                        <td>300.000 FCFA</td>
                        <td>
                            <div className="progress" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar w-75"></div>
                            </div>
                        </td>
                        <td><span>Terminé</span></td>
                        <td className="icons-btn">
                            <button type="submit" className="btn icons-btn">
                                <img src={oeil} alt="oeil" />
                            </button>
                            <button type="submit" className="btn icons-btn">
                                <img src={oeil} alt="oeil" />
                            </button>
                            <button type="submit" className="btn icons-btn">
                                <img src={stop2} alt="oeil" />
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>Anne hathaway</td>
                        <td>01/01/2022</td>
                        <td>300.000 FCFA</td>
                        <td>
                            <div className="progress" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar w-75"></div>
                            </div>
                        </td>
                        <td>En cours</td>
                        <td className="icons-btn">
                            <button type="submit" className="btn icons-btn">
                                <img src={oeil} alt="oeil" />
                            </button>
                            <button type="submit" className="btn icons-btn">
                                <img src={oeil} alt="oeil" />
                            </button>
                            <button type="submit" className="btn icons-btn">
                                <img src={stop2} alt="oeil" />
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>Ravi shankar </td>
                        <td>01/01/2022</td>
                        <td>300.000 FCFA</td>
                        <td>
                            <div className="progress" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar w-50"></div>
                            </div>
                        </td>
                        <td>En cours</td>
                        <td className="icons-btn">
                            <button type="submit" className="btn icons-btn">
                                <img src={oeil} alt="oeil" />
                            </button>
                            <button type="submit" className="btn icons-btn">
                                <img src={oeil} alt="oeil" />
                            </button>
                            <button type="submit" className="btn icons-btn">
                                <img src={stop2} alt="oeil" />
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>Emma Stone </td>
                        <td>01/01/2022</td>
                        <td>300.000 FCFA</td>
                        <td>
                            <div className="progress" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar w-50"></div>
                            </div>
                        </td>
                        <td>En cours</td>
                        <td className="icons-btn">
                            <button type="submit" className="btn icons-btn">
                                <img src={oeil} alt="oeil" />
                            </button>
                            <button type="submit" className="btn icons-btn">
                                <img src={oeil} alt="oeil" />
                            </button>
                            <button type="submit" className="btn icons-btn">
                                <img src={stop} alt="oeil" />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}