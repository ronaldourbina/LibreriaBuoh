# Librería Buoh

Tienda en línea de una librería, con catálogo de libros, carrito de compras y backend propio en .NET.

Proyecto full-stack compuesto por dos partes:

- **Frontend** — React + TypeScript + Vite
- **Backend** — ASP.NET Core 8 Web API + Entity Framework Core + SQL Server LocalDB

## Estructura del repositorio

```
LibreriaBuoh/
├── LibreriaBuoh.Api/       # Backend (.NET 8 Web API)
├── LibreriaBuoh-React/     # Frontend (React + Vite)
├── BD/
│   └── LibreriaBuoh.sql    # Script de respaldo para crear la BD manualmente
└── README.md
```

## Requisitos

- [.NET 8 SDK](https://dotnet.microsoft.com/download)
- [Node.js](https://nodejs.org/) 18 o superior
- SQL Server LocalDB (se instala junto con Visual Studio, carga de trabajo **Desarrollo de ASP.NET y web**)
- Visual Studio 2022+ (opcional, también se puede correr todo por terminal)

> **Nota:** SQL Server LocalDB solo funciona en Windows. En Mac/Linux habría que reemplazarlo por SQL Server en Docker o cambiar el proveedor de Entity Framework.

## Cómo correr el proyecto

Hay que levantar el backend primero y luego el frontend.

### 1. Backend

```powershell
cd LibreriaBuoh.Api
dotnet restore
dotnet run --launch-profile https
```

- Swagger se abre automáticamente en `https://localhost:7116/swagger`
- Al iniciar por primera vez, Entity Framework crea la base `LibreriaBuohDb` en `(localdb)\MSSQLLocalDB` y la llena con 5 libros de ejemplo.
- Si el navegador se queja del certificado HTTPS de desarrollo, correr una sola vez:
  ```powershell
  dotnet dev-certs https --trust
  ```

### 2. Frontend

En otra terminal:

```powershell
cd LibreriaBuoh-React
npm install
npm run dev
```

- Se abre en `http://localhost:5173` (o `5174` si el puerto está ocupado)
- El backend ya tiene CORS habilitado para ambos puertos

## Endpoints de la API

| Método | Ruta | Descripción |
|---|---|---|
| GET | `/api/Libro` | Listar todos los libros |
| GET | `/api/Libro/{id}` | Obtener un libro por id |
| POST | `/api/Libro` | Crear un libro |
| PUT | `/api/Libro/{id}` | Actualizar un libro |
| DELETE | `/api/Libro/{id}` | Eliminar un libro |

El frontend actualmente solo consume `GET /api/Libro` para mostrar el catálogo.

## Modelo de datos

Tabla `Libros`:

| Campo | Tipo | Descripción |
|---|---|---|
| Id | int | Identificador, autogenerado |
| Nombre | nvarchar(150) | Título del libro |
| Autor | nvarchar(120) | Autor |
| Descripcion | nvarchar(600) | Descripción corta |
| Precio | decimal(10,2) | Precio en soles |
| Imagen | nvarchar(200) | Nombre de archivo de imagen (debe existir en `LibreriaBuoh-React/public/images/`) |
| Categoria | nvarchar(80) | Categoría del libro |

Si prefieres crear la base manualmente en vez de dejar que Entity Framework lo haga, corre `BD/LibreriaBuoh.sql` directamente en SQL Server Management Studio.

## Ver la base de datos con SSMS

1. Conectar al servidor: `(localdb)\MSSQLLocalDB` (Windows Authentication)
2. Expandir **Databases → LibreriaBuohDb → Tables → dbo.Libros**
3. Clic derecho → **Select Top 1000 Rows**

## Pendientes conocidos

- [ ] Conectar la página de detalle de producto (`PageProducto.tsx`) a datos reales
- [ ] Activar el filtro por categoría en el catálogo (hoy es solo visual)
- [ ] Definir qué hace el botón "Finalizar compra" (endpoint de pedido / pasarela de pago)
- [ ] Manejo de estados de carga/error en el listado de productos
- [ ] Formulario funcional en la página de Contacto
- [ ] Mover la URL de la API a variables de entorno (`.env`) en el frontend
- [ ] Autenticación para los endpoints de escritura (POST/PUT/DELETE) del backend

## Stack técnico

**Frontend:** React 19, TypeScript, Vite, React Router 7, Bootstrap 5

**Backend:** ASP.NET Core 8, Entity Framework Core, SQL Server, Swagger/OpenAPI
