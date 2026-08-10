import { NavLink } from "react-router-dom";
import { useState } from "react";

interface IProps {
    cantidad: number;
}

export default function CompCabecera( { cantidad }: IProps ) {
    const [menuAbierto, setMenuAbierto] = useState(false);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
            <div className="container">

                <NavLink className="navbar-brand" to="/">Librería Buoh</NavLink>

                <button
                    className="navbar-toggler"
                    type="button"
                    aria-label="Abrir menú de navegación"
                    aria-expanded={menuAbierto}
                    onClick={() => setMenuAbierto(!menuAbierto)}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className={`collapse navbar-collapse ${menuAbierto ? "show" : ""}`}
                    id="menuPrincipal"
                >
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/productos" onClick={() => setMenuAbierto(false)}>
                                Libros
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/nosotros" onClick={() => setMenuAbierto(false)}>
                                Nosotros
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contacto" onClick={() => setMenuAbierto(false)}>
                                Contacto
                            </NavLink>
                        </li>
                    </ul>

                    <NavLink className="nav-link" to="/carrito" onClick={() => setMenuAbierto(false)}>
                        <span className="text-warning">
                            🛒 { cantidad } libro(s)
                        </span>
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}
