using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Demo1.Models
{
    public static class ModelBuilderExtension
    {
        public static void seed(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Employee>().HasData(
                new Employee
                {
                    Id=1,
                    Name = "Mark",
                    EmployeeType = 1,
                    Departmemnt = "IT",
                    Email = "mark@gmaill.com",
                    Salary = 6000
                },
                new Employee
                {
                    Id=2,
                    Name = "Mary",
                    EmployeeType = 2,
                    Departmemnt = "HR",
                    Email = "mary@gmaill.com",
                    Salary = 5000
                }

                );
        }
    }
}
