import oeil from "../../../images/oeil.png"
import "../../CSS-files/Utilisateurs.css"
import stop from "../../../images/panneau-stop.png"


export const BloqueTable = () => {

    return (
        <div className="card Bloque">
            <table>
                <thead>
                    <th>Membres</th>
                    <th>Date début</th>
                    <th>Seuil</th>
                    <th>Statut</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Selena Roy</td>
                        <td>01/01/2022</td>
                        <td>300.000 FCFA</td>
                        <td className="statut">Bloqué</td>
                        <td className="icons-btn">
                            <button type="submit" className="btn icons-btn">
                                <img src={oeil} alt="oeil" />
                            </button>
                            <button type="submit" className="btn icons-btn">
                                <img src={stop} alt="oeil" />
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>Emma Watson</td>
                        <td>01/01/2022</td>
                        <td>300.000 FCFA</td>
                        <td className="statut">Bloqué</td>
                        <td className="icons-btn">
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
                        <td className="statut">Bloqué</td>
                        <td className="icons-btn">
                            <button type="submit" className="btn icons-btn">
                                <img src={oeil} alt="oeil" />
                            </button>
                            <button type="submit" className="btn icons-btn">
                                <img src={stop} alt="oeil" />
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>Anne hathaway</td>
                        <td>01/01/2022</td>
                        <td>300.000 FCFA</td>
                        <td className="statut">Bloqué</td>
                        <td className="icons-btn">
                            <button type="submit" className="btn icons-btn">
                                <img src={oeil} alt="oeil" />
                            </button>
                            <button type="submit" className="btn icons-btn">
                                <img src={stop} alt="oeil" />
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>Ravi shankar </td>
                        <td>01/01/2022</td>
                        <td>300.000 FCFA</td>
                        <td className="statut">Bloqué</td>
                        <td className="icons-btn">
                            <button type="submit" className="btn icons-btn">
                                <img src={oeil} alt="oeil" />
                            </button>
                            <button type="submit" className="btn icons-btn">
                                <img src={stop} alt="oeil" />
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>Emma Stone </td>
                        <td>01/01/2022</td>
                        <td>300.000 FCFA</td>
                        <td className="statut">Bloqué</td>
                        <td className="icons-btn">
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