export default function CompProductoDetalle() {

    return (
        <div className="col-md-9">
            <h5 className="text-secondary">
                Libro
            </h5>

            <div className="card">
                <div className="row g-0">

                    <div className="col-md-4">
                        <img
                            src="/images/CienAñosSoledad.jpg"
                            alt="Portada del libro"
                            className="img-fluid rounded-start" />
                    </div>

                    <div className="col-md-8">
                        <div className="card-body">
                            <h4 className="text-primary">
                                CIEN AÑOS DE SOLEDAD
                            </h4>
                            <h6 className="text-muted">
                                Gabriel García Márquez
                            </h6>
                            <p>
                                La historia de la familia Buendía a lo largo de siete
                                generaciones en el pueblo mágico de Macondo. Una obra
                                cumbre del realismo mágico y de la literatura
                                latinoamericana.
                            </p>
                            <h3 className="text-primary">
                                S/ 79.90
                            </h3>
                            <div className="text-end">
                                <button className="btn btn-primary">
                                    Agregar al carrito
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
