using LibreriaBuoh.Api.Data;
using LibreriaBuoh.Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace LibreriaBuoh.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class LibroController(LibreriaDbContext context) : ControllerBase
{
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Libro>>> ObtenerLibros()
    {
        return await context.Libros
            .AsNoTracking()
            .OrderBy(libro => libro.Nombre)
            .ToListAsync();
    }

    [HttpGet("{id:int}")]
    public async Task<ActionResult<Libro>> ObtenerLibro(int id)
    {
        var libro = await context.Libros.AsNoTracking()
            .FirstOrDefaultAsync(item => item.Id == id);

        return libro is null ? NotFound() : Ok(libro);
    }

    [HttpPost]
    public async Task<ActionResult<Libro>> CrearLibro(Libro libro)
    {
        libro.Id = 0;
        context.Libros.Add(libro);
        await context.SaveChangesAsync();

        return CreatedAtAction(nameof(ObtenerLibro), new { id = libro.Id }, libro);
    }

    [HttpPut("{id:int}")]
    public async Task<IActionResult> ActualizarLibro(int id, Libro libro)
    {
        if (id != libro.Id)
        {
            return BadRequest("El identificador de la ruta no coincide con el libro.");
        }

        if (!await context.Libros.AnyAsync(item => item.Id == id))
        {
            return NotFound();
        }

        context.Entry(libro).State = EntityState.Modified;
        await context.SaveChangesAsync();

        return NoContent();
    }

    [HttpDelete("{id:int}")]
    public async Task<IActionResult> EliminarLibro(int id)
    {
        var libro = await context.Libros.FindAsync(id);
        if (libro is null)
        {
            return NotFound();
        }

        context.Libros.Remove(libro);
        await context.SaveChangesAsync();

        return NoContent();
    }
}
