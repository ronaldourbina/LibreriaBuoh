# Librería Buoh — Frontend React

Frontend de una librería virtual desarrollado como proyecto grupal. Consume una API REST en .NET que utiliza Entity Framework Core y SQL Server.

## Tecnologías

- React 19 y TypeScript
- Vite
- React Router
- Bootstrap 5
- API REST con JSON

## Requisitos

- Node.js LTS
- npm (incluido con Node.js)
- Backend Librería Buoh ejecutándose en `https://localhost:7116`

## Ejecutar el frontend

En PowerShell, dentro de esta carpeta:

```powershell
npm.cmd install
npm.cmd run dev
```

Abrir `http://localhost:5173` en el navegador.

## Conexión con el backend

La URL base está en `src/apis/libreria.api.ts`. El catálogo ejecuta:

```http
GET https://localhost:7116/api/Libro
```

Cada libro debe tener esta estructura:

```json
{
  "id": 1,
  "nombre": "El Principito",
  "autor": "Antoine de Saint-Exupéry",
  "descripcion": "Descripción",
  "precio": 39.90,
  "imagen": "Principito.jpg",
  "categoria": "Infantil"
}
```

Si la API está apagada, la pantalla muestra un mensaje amigable y permite reintentar la conexión.

## Funcionalidades

- Navegación entre inicio, catálogo, nosotros, contacto y carrito.
- Consulta de libros desde la API.
- Estados de carga, error y reintento.
- Filtro por categoría.
- Carrito persistente mediante `localStorage`.
- Incremento, reducción y eliminación de productos.
- Cálculo de subtotal, IGV y total.
- Diseño adaptable para computadoras y celulares.

## Verificación

```powershell
npm.cmd run lint
npm.cmd run build
```

## Estructura principal

```text
src/
├── apis/          URL de la API
├── components/    Componentes reutilizables
├── data/          Categorías del catálogo
├── interfaces/    Tipos de TypeScript
├── pages/         Pantallas de la aplicación
└── services/      Comunicación con el backend
```

El diagrama de componentes y la guía de exposición están en la carpeta `docs`.
