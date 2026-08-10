import { Link } from "react-router-dom";
import hero from "../assets/hero.png";

export default function Home() {

    return (
        <div className="text-center">
            <img
                src={hero}
                alt="Bienvenido a Librería Buoh"
                className="img-fluid rounded mb-4" />

            <h1>Bienvenido a Librería Buoh</h1>
            <p className="lead">
                Miles de historias esperando ser leídas. Novela, ciencia ficción,
                infantil y autoayuda, todo en un solo lugar.
            </p>

            <Link to="/productos" className="btn btn-primary btn-lg mt-2">
                Ver catálogo de libros
            </Link>
        </div>
    )
};
