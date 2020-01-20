using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Demo1.Models;

namespace Demo1.Repository
{
    public interface IEmployeeRepository
    {
        Employee GetEmployee(int Id);
        IEnumerable<Employee> GetAllEmployees();
        void Add(Employee employee);
        void Update(Employee employee);
        void Delete(int Id);

    }
}
