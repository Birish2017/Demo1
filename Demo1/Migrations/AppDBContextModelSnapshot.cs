﻿// <auto-generated />
using Demo1.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Demo1.Migrations
{
    [DbContext(typeof(AppDBContext))]
    partial class AppDBContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.4-rtm-31024")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Demo1.Models.Author", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("name");

                    b.HasKey("id");

                    b.ToTable("authors");
                });

            modelBuilder.Entity("Demo1.Models.Course", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("authorId");

                    b.Property<string>("category");

                    b.Property<string>("slug");

                    b.Property<string>("title");

                    b.HasKey("id");

                    b.HasIndex("authorId");

                    b.ToTable("courses");
                });

            modelBuilder.Entity("Demo1.Models.Employee", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Departmemnt");

                    b.Property<string>("Email");

                    b.Property<int>("EmployeeType");

                    b.Property<string>("Name");

                    b.Property<int>("Salary");

                    b.HasKey("Id");

                    b.ToTable("employees");

                    b.HasData(
                        new { Id = 1, Departmemnt = "IT", Email = "mark@gmaill.com", EmployeeType = 1, Name = "Mark", Salary = 6000 },
                        new { Id = 2, Departmemnt = "HR", Email = "mary@gmaill.com", EmployeeType = 2, Name = "Mary", Salary = 5000 }
                    );
                });

            modelBuilder.Entity("Demo1.Models.Course", b =>
                {
                    b.HasOne("Demo1.Models.Author", "author")
                        .WithMany()
                        .HasForeignKey("authorId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
