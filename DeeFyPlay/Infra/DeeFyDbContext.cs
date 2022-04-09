using System;
using DeeFyPlay.Model;
using Microsoft.EntityFrameworkCore;

namespace DeeFyPlay.Infra
{
    public class DeeFyDbContext : DbContext
    {
        public virtual DbSet<Usuario> Usuarios { get; set; }
       /* public virtual DbSet<Album> Albums { get; set; }
        public virtual DbSet<Artista> Artistas { get; set; }
        public virtual DbSet<Genero> Generos { get; set; }
        public virtual DbSet<Musica> Musicas { get; set; }*/


        public DeeFyDbContext(DbContextOptions<DeeFyDbContext> options) : base(options)
        {
        }
    }
}
