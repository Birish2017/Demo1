using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace Demo1.Models
{
    public class AppDBContext:DbContext
    {
        public AppDBContext(DbContextOptions<AppDBContext>options) : base(options)
        {

        }
        public DbSet<Employee> employees { get; set; }
        public DbSet<Course>courses { get; set; }
        public DbSet<Author> authors { get; set; }
        public DbSet<FileUpload> fileUploads { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.seed();
        }
    }
}
