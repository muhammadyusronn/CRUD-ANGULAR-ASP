using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using MVC_API.Data;
using MVC_API.Models;
using System.Text.Encodings;
namespace MVC_API.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class AuthController : Controller
    {
        private readonly FullstackDbContext _fullstackDbContext;
        private readonly IConfiguration _configuration;
        public AuthController(IConfiguration configuration, FullstackDbContext fullstackDbContext)
        {
            _configuration = configuration;
            _fullstackDbContext = fullstackDbContext;
        }
        // POST: /<controller>/
        [HttpPost]
        public IActionResult Login(User request)
        {
            string token = "";
            IActionResult response = Unauthorized();
            var user = _fullstackDbContext.User.FirstOrDefault(x => x.username == request.username);
            if (user == null) return BadRequest("User Not Found!");
            // validate password
            if (!BCrypt.Net.BCrypt.Verify(request.password, user.password))
                return BadRequest("Username or password is incorrect");
            else
                token = createToken(user);
                response = Ok(new {message="Successfully Login!",token=token});
                return response;
        }

        private string createToken(User user) {
            List<Claim> claims = new List<Claim>
            {
                new Claim(ClaimTypes.NameIdentifier, user.username),
                new Claim(ClaimTypes.Name, user.nama)
            };
            var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(_configuration.GetSection("AppSettings:Token").Value));
            var cred = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var token = new JwtSecurityToken(
                _configuration.GetSection("AppSettings:Issuer").Value,
                _configuration.GetSection("AppSettings:Audience").Value,
                claims: claims,
                expires:DateTime.Now.AddDays(1),
                signingCredentials:cred
                );
            var jwt = new JwtSecurityTokenHandler().WriteToken(token);
            return jwt;
        }
        private string generateToken(User user)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration.GetSection("AppSettings:Token").Value));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                _configuration.GetSection("AppSettings:Issuer").Value,
                _configuration.GetSection("AppSettings:Audience").Value,
                null,
                expires: DateTime.Now.AddDays(1),
                signingCredentials: credentials
                );
            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}

