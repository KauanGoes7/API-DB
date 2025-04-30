import './menu.css';
import logo from "../assets/images/logo.png";

export const Menu = ({ s1, s2 }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img src={logo} alt="Logo" className="navbar-logo" />
                </a>
                
                <div className="navbar-collapse">
                    <div className="navbar-nav ms-auto">
                        <a href="/requisicao" className="nav-link" target="_blank" rel="noopener noreferrer">
                            {s1}
                        </a>
                        <a href="/contato" className="nav-link" target="_blank" rel="noopener noreferrer">
                            {s2}
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};