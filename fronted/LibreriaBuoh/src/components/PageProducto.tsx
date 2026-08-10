import CompCabecera from "./CompCabecera";
import CompListaCategorias from "./CompListaCategorias";
import CompProductoDetalle from "./CompProductoDetalle";
import CompPiePagina from "./CompPiePagina";

export default function PageProducto() {

    return (
        <>
            <CompCabecera cantidad={0} />

            <main className="container">
                <div className="row">
                    <CompListaCategorias />
                    <CompProductoDetalle />
                </div>
            </main>

            <CompPiePagina />
        </>
    );

}