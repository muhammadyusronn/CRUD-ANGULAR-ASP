using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MVC_API.Data;
using MVC_API.Models;
using BCrypt.Net;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MVC_API.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class UserController : Controller
    {
        private readonly FullstackDbContext _fullstackDbContext;
        public UserController(FullstackDbContext fullstackDbContext)
        {
            _fullstackDbContext = fullstackDbContext;
        }

        // GET: /<controller>/
        [HttpGet]
        public IActionResult getAllUser()
        {
            var user = _fullstackDbContext.User.ToList();
            return Ok(user);
        }

        // POST: /<controller>/
        [HttpPost]
        public IActionResult addUser([FromBody] User req)
        {
            req.id = Guid.NewGuid();
            req.password = BCrypt.Net.BCrypt.HashPassword(req.password);
            _fullstackDbContext.User.Add(req);
            _fullstackDbContext.SaveChanges();

            return Ok(req);

        }

        // GET: /<controllers>/
        [HttpGet]
        [Route("{id:Guid}")]
        public IActionResult getUserByID([FromRoute] Guid id)
        {
            var user = _fullstackDbContext.User.FirstOrDefault(x => x.id == id);
            if (user == null)
            {
                return NotFound();
            }

            return Ok(user);
        }

        // PUT: /<controllers>/
        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> updateUser([FromRoute] Guid id, User req)
        {
            var user = await _fullstackDbContext.User.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }
            user.nama = req.nama;
            user.username = req.username;
            user.password = BCrypt.Net.BCrypt.HashPassword(req.password);

            await _fullstackDbContext.SaveChangesAsync();
            return Ok(user);
        }

        // DELETE: /<controllers>/
        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> deleteUser([FromRoute] Guid id)
        {
            var user = await _fullstackDbContext.User.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            _fullstackDbContext.User.Remove(user);
            await _fullstackDbContext.SaveChangesAsync();

            return Ok(user);
        }
    }
}

