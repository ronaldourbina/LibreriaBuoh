import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Productos from './pages/Productos';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';
import Carrito from './pages/Carrito';

import CompCabecera from './components/CompCabecera';
import CompPiePagina from './components/CompPiePagina';

import { useEffect, useState } from "react";

import './App.css'

import type { ICarritoItem } from './interfaces/carrito.interface';
import type { IProducto } from './interfaces/producto.interface';

function App() {

  const [carrito, setCarrito] = useState<ICarritoItem[]>(() => {
    try {
      const datos = localStorage.getItem('carrito');
      return datos ? JSON.parse(datos) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

  const agregarProducto = (producto: IProducto) => {
    const existe = carrito.find(item => item.id === producto.id);

    if (existe) {
      setCarrito(
        carrito.map(item =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        )
      );
    }
    else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  }

  const eliminarProducto = (id: number) => {
    setCarrito(
        carrito.filter(item => item.id !== id)
    );
  };

  const incrementarCantidad = (id: number) => {
    setCarrito(
        carrito.map(item =>
            item.id === id
                ? { ...item, cantidad: item.cantidad + 1 }
                : item
        )
    );
  };

  const disminuirCantidad = (id: number) => {
    setCarrito(
        carrito.map(item =>
            item.id === id && item.cantidad > 1
                ? { ...item, cantidad: item.cantidad - 1 }
                : item
        )
    );
  };

  const vaciarCarrito = () => {
    if (confirm("¿Está seguro de vaciar el carrito?")) {
        setCarrito([]);
    }
  };

  const finalizarCompra = () => {
    alert("¡Gracias por tu compra! El pedido fue registrado correctamente.");
    setCarrito([]);
  };

  const subtotal = carrito.reduce(
      (total, item) => total + item.precio * item.cantidad,
      0
  );

  const igv = subtotal * 0.18;

  const total = subtotal + igv;  

  const cantidad = carrito.reduce((total, item) => total + item.cantidad, 0);

  return (
    <>
      <CompCabecera cantidad = { cantidad } />

      <main className="container my-4">
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/productos" element={ <Productos agregarProducto = { agregarProducto } /> } />
          <Route path="/nosotros" element={ <Nosotros /> } />
          <Route path="/contacto" element={ <Contacto /> } />
          <Route path="/carrito" 
              element={ <Carrito 
                          carrito={carrito}
                          eliminarProducto={eliminarProducto}
                          incrementarCantidad={incrementarCantidad}
                          disminuirCantidad={disminuirCantidad}
                          vaciarCarrito={vaciarCarrito}
                          finalizarCompra={finalizarCompra}
                          subtotal={subtotal}
                          igv={igv}
                          total={total}
                    /> } 
          />

          <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
        </Routes>
      </main>

      <CompPiePagina />
    </>
  );
}

export default App
