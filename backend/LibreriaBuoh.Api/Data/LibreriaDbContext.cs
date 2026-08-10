using LibreriaBuoh.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace LibreriaBuoh.Api.Data;

public class LibreriaDbContext(DbContextOptions<LibreriaDbContext> options)
    : DbContext(options)
{
    public DbSet<Libro> Libros => Set<Libro>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Libro>().HasData(
            new Libro
            {
                Id = 1,
                Nombre = "El Principito",
                Autor = "Antoine de Saint-Exupéry",
                Descripcion = "Una historia sobre la amistad, el amor y el sentido de la vida.",
                Precio = 39.90m,
                Imagen = "Principito.jpg",
                Categoria = "Infantil"
            },
            new Libro
            {
                Id = 2,
                Nombre = "Cien años de soledad",
                Autor = "Gabriel García Márquez",
                Descripcion = "La historia de la familia Buendía en el pueblo de Macondo.",
                Precio = 79.90m,
                Imagen = "CienAñosSoledad.jpg",
                Categoria = "Novela"
            },
            new Libro
            {
                Id = 3,
                Nombre = "1984",
                Autor = "George Orwell",
                Descripcion = "Una novela sobre vigilancia, poder y libertad.",
                Precio = 54.90m,
                Imagen = "1984.png",
                Categoria = "Ciencia Ficción"
            },
            new Libro
            {
                Id = 4,
                Nombre = "Fahrenheit 451",
                Autor = "Ray Bradbury",
                Descripcion = "Un futuro en el que los libros están prohibidos.",
                Precio = 49.90m,
                Imagen = "frahenreit.jpg",
                Categoria = "Ciencia Ficción"
            },
            new Libro
            {
                Id = 5,
                Nombre = "Los 7 hábitos de la gente altamente efectiva",
                Autor = "Stephen R. Covey",
                Descripcion = "Principios prácticos para mejorar la efectividad personal.",
                Precio = 69.90m,
                Imagen = "7habitos.jpg",
                Categoria = "Autoayuda"
            });
    }
}
