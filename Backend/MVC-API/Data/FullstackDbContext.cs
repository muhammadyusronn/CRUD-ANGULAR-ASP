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
    }
}

