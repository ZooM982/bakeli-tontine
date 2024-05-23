import "../components/CSS-files/Navbar.css"
import cloche from "../images/cloche.png"
import AuthDetails from "./Authentification/AuthDetails"
const Navbar = () => {

    return (
        <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">Admin Dashboard</a>
                <div className="users-side d-flex">
                    <button type="button" class="btn position-relative">
                        <img src={cloche} alt="clochedenotif" />
                        <span class="translate-middle badge rounded-pill">
                            <p>4</p>
                        </span>
                    </button>
                    <div className="user-profil">

                    </div>
                    <AuthDetails />
                </div>
            </div>
        </nav>
    )
}
export default Navbar