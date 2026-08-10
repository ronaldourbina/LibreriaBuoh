import ProductoCard from "../components/ProductoCard";
import CompListaCategorias from "../components/CompListaCategorias";

import type { IProducto } from "../interfaces/producto.interface";
import { useEffect, useState } from "react";
import { ObtenerProductos } from "../services/producto.service";

interface IProps {
    agregarProducto: (producto: IProducto) => void;
}

export default function Productos({ agregarProducto }: IProps) {

    const [productos, setProductos] = useState<IProducto[]>([]);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todas");
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState("");

    const cargarProductos = async () => {
        setCargando(true);
        setError("");

        try {
            const data = await ObtenerProductos();
            setProductos(data);
        } catch {
            setProductos([]);
            setError("El catálogo no está disponible en este momento.");
        } finally {
            setCargando(false);
        }
    };

    useEffect(() => {
        let activo = true;

        ObtenerProductos()
            .then(data => {
                if (activo) {
                    setProductos(data);
                }
            })
            .catch(() => {
                if (activo) {
                    setError("El catálogo no está disponible en este momento.");
                }
            })
            .finally(() => {
                if (activo) {
                    setCargando(false);
                }
            });

        return () => {
            activo = false;
        };
    }, []);

    const productosFiltrados = categoriaSeleccionada === "Todas"
        ? productos
        : productos.filter(
            producto => producto.categoria === categoriaSeleccionada
        );

    return (
        <div>
            <h2 className="mb-3">Catálogo de Libros</h2>

            {cargando && (
                <div className="alert alert-info" role="status">
                    Cargando libros desde la API...
                </div>
            )}

            {error && (
                <div className="alert alert-danger" role="alert">
                    <p className="mb-2">{error}</p>
                    <p className="small mb-3">
                        Inténtalo nuevamente en unos momentos.
                    </p>
                    <button className="btn btn-outline-danger" onClick={cargarProductos}>
                        Reintentar
                    </button>
                </div>
            )}

            {!cargando && !error && (
                <div className="row">
                    <CompListaCategorias
                        categoriaSeleccionada={categoriaSeleccionada}
                        seleccionarCategoria={setCategoriaSeleccionada}
                    />

                    <div className="col-md-9">
                        <div className="row">
                            {productosFiltrados.map((producto) => (
                                <div className="col-sm-6 col-lg-4 mb-4" key={producto.id}>
                                    <ProductoCard
                                        producto={producto}
                                        agregar={agregarProducto}
                                    />
                                </div>
                            ))}
                        </div>

                        {productosFiltrados.length === 0 && (
                            <div className="alert alert-warning">
                                No hay libros disponibles en esta categoría.
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
};
