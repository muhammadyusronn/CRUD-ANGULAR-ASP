using System;
using Microsoft.EntityFrameworkCore;
using MVC_API.Models;

namespace MVC_API.Data
{
    public class FullstackDbContext : DbContext
    {
        public FullstackDbContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<JenisTransaksi> JenisTransaksi { get; set; }
        public DbSet<User> User { get; set; }
        public DbSet<Transaksi> Transaksi { get; set; }
        public DbSet<TransaksiTabungan> TransaksiTabungan { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<JenisTransaksi>()
                .HasIndex(j => new { j.kode_transaksi })
                .IsUnique(true);

            modelBuilder.Entity<User>()
                .HasIndex(u => new { u.username })
                .IsUnique(true);
        }
    }
}

