# Librería Buoh — Backend

API REST desarrollada con ASP.NET Core 8, Entity Framework Core y SQL Server LocalDB.

## Requisitos

- Visual Studio 2022 o posterior con la carga **Desarrollo de ASP.NET y web**.
- .NET 8 SDK.
- SQL Server LocalDB (normalmente incluido con Visual Studio).

## Ejecutar

### Desde Visual Studio

1. Abrir `LibreriaBuoh.Backend.slnx`.
2. Seleccionar el perfil HTTPS.
3. Presionar `F5` o el botón verde.
4. Swagger abrirá en `https://localhost:7116/swagger`.

### Desde PowerShell

```powershell
cd LibreriaBuoh.Api
dotnet restore
dotnet run --launch-profile https
```

Al iniciar por primera vez, Entity Framework crea automáticamente la base `LibreriaBuohDb` en `(localdb)\MSSQLLocalDB` y registra cinco libros.

## Endpoints

| Método | Ruta | Operación |
|---|---|---|
| GET | `/api/Libro` | Listar libros |
| GET | `/api/Libro/{id}` | Obtener un libro |
| POST | `/api/Libro` | Crear un libro |
| PUT | `/api/Libro/{id}` | Actualizar un libro |
| DELETE | `/api/Libro/{id}` | Eliminar un libro |

El endpoint utilizado por React es:

```text
https://localhost:7116/api/Libro
```

## Integración con React

CORS permite solicitudes desde:

```text
http://localhost:5173
http://localhost:5174
```

Primero se inicia la API y después el frontend React.

## Base de datos

La cadena de conexión se encuentra en `LibreriaBuoh.Api/appsettings.json`. También se incluye `database/LibreriaBuoh.sql` como respaldo para crear la base manualmente.
