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
    public class JenisTransaksiController : Controller
    {
        private readonly FullstackDbContext _fullstackDbContext;
        public JenisTransaksiController(FullstackDbContext fullstackDbContext)
        {
            _fullstackDbContext = fullstackDbContext;
        }

        // GET: /<controller>/
        [HttpGet]
        public IActionResult getAllJenisTransaksi()
        {
            var jenisTransaksi = _fullstackDbContext.JenisTransaksi.ToList();
            return Ok(jenisTransaksi);
        }

        // POST: /<controller>/
        [HttpPost]
        public IActionResult addJenisTransaksi([FromBody] JenisTransaksi req)
        {
            req.id = Guid.NewGuid();
            _fullstackDbContext.JenisTransaksi.Add(req);
            _fullstackDbContext.SaveChanges();

            return Ok(req);

        }

        // GET: /<controllers>/
        [HttpGet]
        [Route("{id:Guid}")]
        public IActionResult getJenisTransaksiByID([FromRoute] Guid id)
        {
            var jenisTransaksi = _fullstackDbContext.JenisTransaksi.FirstOrDefault(x => x.id == id);
            if (jenisTransaksi == null)
            {
                return NotFound();
            }

            return Ok(jenisTransaksi);
        }

        // PUT: /<controllers>/
        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> updateJenisTransaksi([FromRoute] Guid id, JenisTransaksi req)
        {
            var jenisTransaksi = await _fullstackDbContext.JenisTransaksi.FindAsync(id);
            if (jenisTransaksi == null)
            {
                return NotFound();
            }
            jenisTransaksi.nama = req.nama;
            jenisTransaksi.tipe = req.tipe;
            jenisTransaksi.kode_transaksi = req.kode_transaksi;

            await _fullstackDbContext.SaveChangesAsync();
            return Ok(jenisTransaksi);
        }

        // DELETE: /<controllers>/
        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> deleteJenisTransaksi([FromRoute] Guid id)
        {
            var jenisTransaksi = await _fullstackDbContext.JenisTransaksi.FindAsync(id);
            if (jenisTransaksi == null)
            {
                return NotFound();
            }

            _fullstackDbContext.JenisTransaksi.Remove(jenisTransaksi);
            await _fullstackDbContext.SaveChangesAsync();

            return Ok(jenisTransaksi);
        }
    }
}

