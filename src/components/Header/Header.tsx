import "./Header.scss";
import logo from "../../assets/ar-logo-header.png";

const Header = () => {
    return (
        <header className="c-header">
            <div className="logo">
                <a href="#">
                    <img src={logo} alt="AR constructores" />
                </a>
            </div>
            <div className="c-links">
                <a href="#" className="item">Inicio</a>
                <a href="#cards" className="item">Proyectos</a>
                <a href="#new-projects" className="item">Proximos lanzamientos</a>
                <a href="#" className="item">Ofrece lotes</a>
                <a href="#" className="item">Te asesoramos</a>
                <a href="#" className="item">Contactanos</a>
            </div>
        </header>
    )
}

export default Header
