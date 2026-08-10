import type { IProducto } from "../interfaces/producto.interface";

interface IProps{
    producto: IProducto;
    agregar:(producto: IProducto) => void;
}

export default function ProductoCard({ producto, agregar }: IProps) {

    return (
        <div className="card h-100">
            <img
                src={`/images/${producto.imagen}`}
                alt={producto.nombre}
                className="img-fluid rounded-start"
                style={{ height: "200px", objectFit: "contain" }} />

            <div className="card-body d-flex flex-column">
                <h5> { producto.nombre } </h5>

                <p className="text-muted mb-1"> { producto.autor } </p>

                <p> { producto.descripcion } </p>

                <h4 className="mt-auto"> S/ {producto.precio.toFixed(2)} </h4>
            </div>

            <button className="btn btn-primary" onClick= {() => agregar(producto)}>
                Agregar al carrito
            </button>
        </div>
    )
}
