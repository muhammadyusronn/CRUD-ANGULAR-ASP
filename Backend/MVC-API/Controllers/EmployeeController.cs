using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MVC_API.Data;
using MVC_API.Models;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MVC_API.Controllers
{
    [ApiController]
    [Authorize]
    [Route("/api/[controller]")]
    public class EmployeeController : Controller
    {
        private readonly FullstackDbContext _fullstackDbContext;
        public EmployeeController(FullstackDbContext fullstackDbContext)
        {
            _fullstackDbContext = fullstackDbContext;
        }
        // GET: /<controller>/
        [HttpGet]
        public IActionResult getAllEmployee()
        {
           var employees =  _fullstackDbContext.Employees.ToList();
            return Ok(employees);
        }

        // POST: /<controller>/
        [HttpPost]
        public  IActionResult AddEMployee([FromBody] Employee emp)
        {
            emp.id = Guid.NewGuid();
             _fullstackDbContext.Employees.Add(emp);
            _fullstackDbContext.SaveChanges();

            return Ok(emp);

        }

        // GET: /<controllers>/
        [HttpGet]
        [Route("{id:Guid}")]
        public IActionResult getEmployeeByID([FromRoute] Guid id)
        {
            var emp = _fullstackDbContext.Employees.FirstOrDefault(x => x.id == id);
            if(emp == null)
            {
                return NotFound();
            }

            return Ok(emp);
        }

        // PUT: /<controllers>/
        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> updateEmployee([FromRoute] Guid id, Employee req)
        {
            var emp = await _fullstackDbContext.Employees.FindAsync(id);
            if (emp == null)
            {
                return NotFound();
            }
            emp.name = req.name;
            emp.email = req.email;
            emp.salary = req.salary;
            emp.phone = req.phone;
            emp.departement = req.departement;

            await _fullstackDbContext.SaveChangesAsync();
            return Ok(emp);
        }

        // DELETE: /<controllers>/
        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> deleteEmployee([FromRoute] Guid id)
        {
            var emp = await _fullstackDbContext.Employees.FindAsync(id);
            if (emp == null)
            {
                return NotFound();
            }

            _fullstackDbContext.Employees.Remove(emp);
            await _fullstackDbContext.SaveChangesAsync();

            return Ok(emp);
        }
    }
}

