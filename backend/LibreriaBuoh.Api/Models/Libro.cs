using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LibreriaBuoh.Api.Models;

public class Libro
{
    public int Id { get; set; }

    [Required, MaxLength(150)]
    public string Nombre { get; set; } = string.Empty;

    [Required, MaxLength(120)]
    public string Autor { get; set; } = string.Empty;

    [Required, MaxLength(600)]
    public string Descripcion { get; set; } = string.Empty;

    [Column(TypeName = "decimal(10,2)")]
    [Range(0.01, 999999.99)]
    public decimal Precio { get; set; }

    [Required, MaxLength(200)]
    public string Imagen { get; set; } = string.Empty;

    [Required, MaxLength(80)]
    public string Categoria { get; set; } = string.Empty;
}
