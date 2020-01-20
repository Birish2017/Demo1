using Demo1.Models;
using System.Collections.Generic;
using System.Linq;

namespace Demo1.Repository
{
    public class EmployeeRepository : IEmployeeRepository
    {
        private readonly AppDBContext _context;

        public EmployeeRepository(AppDBContext context)
        {
            _context = context;
        }

        public void Add(Employee employee)
        {
            _context.Add(employee);
            _context.SaveChanges();
            
        }

        public void Delete(int Id)
        {
           Employee employee= _context.employees.SingleOrDefault(e => e.Id == Id);
            _context.employees.Remove(employee);
            _context.SaveChanges();
        }

        public IEnumerable<Employee> GetAllEmployees()
        {
           return _context.employees.ToList();
        }

        public Employee GetEmployee(int Id)
        {
          return  _context.employees.SingleOrDefault(e => e.Id == Id);

        }
        
        public void Update(Employee UpdatedEmployee)
        {
          Employee employee=  _context.employees.SingleOrDefault(e => e.Id == UpdatedEmployee.Id);

            employee.Name = UpdatedEmployee.Name;
            employee.Email = UpdatedEmployee.Email;
            employee.EmployeeType = UpdatedEmployee.EmployeeType;
            employee.Departmemnt = UpdatedEmployee.Departmemnt;
            employee.Salary = UpdatedEmployee.Salary;

            _context.employees.Attach(employee);
            
            _context.SaveChanges();

        }
    }
}
