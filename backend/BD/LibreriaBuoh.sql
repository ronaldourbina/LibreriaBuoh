IF DB_ID(N'LibreriaBuohDb') IS NULL
BEGIN
    CREATE DATABASE LibreriaBuohDb;
END;
GO

USE LibreriaBuohDb;
GO

IF OBJECT_ID(N'dbo.Libros', N'U') IS NULL
BEGIN
    CREATE TABLE dbo.Libros
    (
        Id INT IDENTITY(1,1) NOT NULL CONSTRAINT PK_Libros PRIMARY KEY,
        Nombre NVARCHAR(150) NOT NULL,
        Autor NVARCHAR(120) NOT NULL,
        Descripcion NVARCHAR(600) NOT NULL,
        Precio DECIMAL(10,2) NOT NULL,
        Imagen NVARCHAR(200) NOT NULL,
        Categoria NVARCHAR(80) NOT NULL
    );
END;
GO

IF NOT EXISTS (SELECT 1 FROM dbo.Libros)
BEGIN
    SET IDENTITY_INSERT dbo.Libros ON;

    INSERT INTO dbo.Libros (Id, Nombre, Autor, Descripcion, Precio, Imagen, Categoria)
    VALUES
        (1, N'El Principito', N'Antoine de Saint-Exupéry', N'Una historia sobre la amistad, el amor y el sentido de la vida.', 39.90, N'Principito.jpg', N'Infantil'),
        (2, N'Cien años de soledad', N'Gabriel García Márquez', N'La historia de la familia Buendía en el pueblo de Macondo.', 79.90, N'CienAñosSoledad.jpg', N'Novela'),
        (3, N'1984', N'George Orwell', N'Una novela sobre vigilancia, poder y libertad.', 54.90, N'1984.png', N'Ciencia Ficción'),
        (4, N'Fahrenheit 451', N'Ray Bradbury', N'Un futuro en el que los libros están prohibidos.', 49.90, N'frahenreit.jpg', N'Ciencia Ficción'),
        (5, N'Los 7 hábitos de la gente altamente efectiva', N'Stephen R. Covey', N'Principios prácticos para mejorar la efectividad personal.', 69.90, N'7habitos.jpg', N'Autoayuda');

    SET IDENTITY_INSERT dbo.Libros OFF;
END;
GO
