import categorias from "../data/categorias.json";

interface IProps {
    categoriaSeleccionada?: string;
    seleccionarCategoria?: (categoria: string) => void;
}

export default function CompListaCategorias({
    categoriaSeleccionada = "Todas",
    seleccionarCategoria = () => undefined
}: IProps) {
    const claseBoton = (categoria: string) =>
        `list-group-item list-group-item-action ${
            categoriaSeleccionada === categoria ? "active" : ""
        }`;

    return (
        <div className="col-md-3">
            <h5 className="text-secondary">
                Categorías
            </h5>

            <div className="list-group">
                <button
                    type="button"
                    className={claseBoton("Todas")}
                    onClick={() => seleccionarCategoria("Todas")}
                >
                    Todas
                </button>

                {
                    categorias.map((categoria) => (
                        <button
                            type="button"
                            className={claseBoton(categoria.nombre)}
                            key={categoria.id}
                            onClick={() => seleccionarCategoria(categoria.nombre)}
                        >
                            {categoria.nombre}
                        </button>
                    ))
                }

            </div>
        </div>
    );
}
