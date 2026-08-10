import API_URL from "../apis/libreria.api";
import type { IProducto } from "../interfaces/producto.interface";

export async function ObtenerProductos(): Promise<IProducto[]>{

    const respuesta = await fetch(`${API_URL}/Libro`);

    if(!respuesta.ok){
        throw new Error("No se pudo obtener los libros");
    }

    return await respuesta.json();
}
