import CompCarrito from "../components/CompCarrito";
import type { ICarritoItem } from "../interfaces/carrito.interface";

interface Props{
    carrito: ICarritoItem[];
    eliminarProducto: (id: number) => void;
    incrementarCantidad: (id: number) => void;
    disminuirCantidad: (id: number) => void;
    vaciarCarrito: () => void;
    finalizarCompra: () => void;
    subtotal: number;
    igv: number;
    total: number;
}

export default function Carrito({carrito, eliminarProducto, incrementarCantidad, disminuirCantidad, vaciarCarrito,
    finalizarCompra, subtotal, igv, total}: Props) {

    return (
        <div className="container my-4">

            <h2 className="mb-4">
                Carrito de Libros
            </h2>

            <CompCarrito
                carrito={carrito}
                eliminarProducto={eliminarProducto}
                incrementarCantidad={incrementarCantidad}
                disminuirCantidad={disminuirCantidad}
            />

            {carrito.length > 0 && (
                <div className="card mt-4 shadow-sm">
                    <div className="card-body">
                        <h4 className="mb-3">
                            Resumen del pedido
                        </h4>
                        <div className="d-flex justify-content-between">
                            <span>Subtotal</span>
                            <strong>S/. {subtotal.toFixed(2)}</strong>
                        </div>
                        <div className="d-flex justify-content-between">
                            <span>IGV (18%)</span>
                            <strong>S/. {igv.toFixed(2)}</strong>
                        </div>

                        <hr />

                        <div className="d-flex justify-content-between fs-5">
                            <strong>Total</strong>
                            <strong>S/. {total.toFixed(2)}</strong>
                        </div>
                        <div className="mt-4 d-flex justify-content-end gap-2">
                            <button
                                className="btn btn-outline-danger"
                                onClick={vaciarCarrito}
                            >
                                Vaciar carrito
                            </button>

                            <button className="btn btn-success" onClick={finalizarCompra}>
                                Finalizar compra
                            </button>
                        </div>
                    </div>
                </div>

            )}

        </div>
    );
}
