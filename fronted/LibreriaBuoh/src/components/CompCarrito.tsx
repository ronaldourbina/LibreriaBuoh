import type { ICarritoItem } from "../interfaces/carrito.interface";

interface IProps {
    carrito: ICarritoItem[];
    eliminarProducto: (id: number) => void;
    incrementarCantidad: (id: number) => void;
    disminuirCantidad: (id: number) => void;
}

export default function CompCarrito({
    carrito,
    eliminarProducto,
    incrementarCantidad,
    disminuirCantidad
}: IProps) {

    if (carrito.length === 0) {
        return (
            <div className="alert alert-warning text-center">
                <h4>🛒 El carrito está vacío</h4>
                <p className="mb-0">
                    Agrega libros para comenzar tu compra.
                </p>
            </div>
        );
    }

    return (
        <table className="table table-hover align-middle">
            <thead className="table-dark">
                <tr>
                    <th>Imagen</th>
                    <th>Libro</th>
                    <th className="text-end">Precio</th>
                    <th className="text-center">Cantidad</th>
                    <th className="text-end">Subtotal</th>
                    <th className="text-center">Acciones</th>
                </tr>
            </thead>

            <tbody>
                {carrito.map((item) => (
                    <tr key={item.id}>
                        <td width="90">
                            <img
                                src={`/images/${item.imagen}`}
                                alt={item.nombre}
                                className="img-thumbnail"
                                style={{ width: "70px" }}
                            />
                        </td>
                        <td>
                            <strong>{item.nombre}</strong>
                        </td>
                        <td className="text-end">
                            S/. {item.precio.toFixed(2)}
                        </td>
                        <td className="text-center">
                            <div className="btn-group">
                                <button
                                    className="btn btn-outline-secondary btn-sm"
                                    onClick={() => disminuirCantidad(item.id)}
                                >
                                    -
                                </button>

                                <button
                                    className="btn btn-light btn-sm"
                                    disabled
                                >
                                    {item.cantidad}
                                </button>

                                <button
                                    className="btn btn-outline-secondary btn-sm"
                                    onClick={() => incrementarCantidad(item.id)}
                                >
                                    +
                                </button>
                            </div>
                        </td>
                        <td className="text-end">
                            S/. {(item.precio * item.cantidad).toFixed(2)}
                        </td>
                        <td className="text-center">
                            <button
                                className="btn btn-outline-danger btn-sm"
                                onClick={() => eliminarProducto(item.id)}
                            >
                                Eliminar
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
            
        </table>
    );

}