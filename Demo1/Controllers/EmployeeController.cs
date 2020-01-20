using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Demo1.Models;
using Demo1.Repository;

namespace Demo1.Controllers
{
    [Route("api/[controller]")]
    public class EmployeeController : Controller
    {
        int a = 2;
        private readonly IEmployeeRepository _context;

        public EmployeeController(IEmployeeRepository context)
        {
            _context = context;
        }
        [HttpGet]
        // [Route("[action]")]
        public ActionResult GetAllEmployee()
        {

            IEnumerable<Employee> employees = _context.GetAllEmployees().ToList();
            return Ok(employees);
        }
        [HttpGet("{Id}")]
        public ActionResult GetEmployee(int Id)
        {
            Employee employee = _context.GetEmployee(Id);

            return Ok(employee);
        }
        [HttpPost]
        public void AddEmployee([FromBody] Employee newEmployee)
        {
            _context.Add(newEmployee);
            
        }
        [HttpDelete("{Id}")]
        public void DeleteEmployee(int Id)
        {
            this._context.Delete(Id);
        }
        [HttpPut]
        public void UpdateEmployee([FromBody]Employee employee)
        {
            _context.Update(employee);
        }
    }
}