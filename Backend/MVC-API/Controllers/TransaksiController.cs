using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Authentication;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Azure.Core;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using MVC_API.Data;
using MVC_API.Models;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MVC_API.Controllers
{
    [ApiController]
    [Authorize]
    [Route("/api/[controller]")]
    public class TransaksiController : Controller
    {
        private readonly FullstackDbContext _fullstackDbContext;
        public TransaksiController(FullstackDbContext fullstackDbContext)
        {
            _fullstackDbContext = fullstackDbContext;
        }

        // GET: /<controller>/
        [HttpGet]
        public IActionResult getAllTransaksi()
        {
            string uname = User.FindFirst(System.Security.Claims.ClaimTypes.NameIdentifier)?.Value;
            var result = from transaksi in _fullstackDbContext.Transaksi
                         join jenis_transaksi in _fullstackDbContext.JenisTransaksi
                         on transaksi.kode_transaksi equals jenis_transaksi.kode_transaksi into Trx
                         from jt in Trx.DefaultIfEmpty()
                         join user in _fullstackDbContext.User
                         on transaksi.created_by equals user.username  into User
                         from usr in User.Where(a => a.username == uname)
                         select new
                         {
                             id = transaksi.id,
                             tanggal_transaksi = transaksi.tanggal_transaksi.ToString("dd/MM/yyyy"),
                             kode_transaksi = transaksi.kode_transaksi,
                             nama_transaksi = jt.nama,
                             tipe_transaksi = jt.tipe,
                             nominal_transaksi = transaksi.nominal_transaksi,
                             nama = usr.nama
                         };
            return Ok(result);
        }

        // POST: /<controller>/
        [HttpPost]
        public IActionResult addTransaksi([FromBody] Transaksi req)
        {
            string uname = User.FindFirst(System.Security.Claims.ClaimTypes.NameIdentifier)?.Value;
            req.created_by = uname;
            req.updated_by = uname;
            req.id = Guid.NewGuid();
            _fullstackDbContext.Transaksi.Add(req);
            _fullstackDbContext.SaveChanges();

            return Ok(req);

        }

        // GET: /<controllers>/
        [HttpGet]
        [Route("{id:Guid}")]
        public IActionResult getTransaksiByID([FromRoute] Guid id)
        {
            var result = from trx in _fullstackDbContext.Transaksi
                         where trx.id == id
                         select new
                         {
                             id = trx.id,
                             tanggal_transaksi = trx.tanggal_transaksi.ToString("yyyy-MM-dd"),
                             kode_transaksi = trx.kode_transaksi,
                             created_by = trx.created_by,
                             updated_by = trx.updated_by,
                             nominal_transaksi = trx.nominal_transaksi
                         };
            if (result.FirstOrDefault() == null)
            {
                return NotFound();
            }
            return Ok(result.FirstOrDefault());
        }

        // PUT: /<controllers>/
        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> updateTransaksi([FromRoute] Guid id, Transaksi req)
        {
            string uname = User.FindFirst(System.Security.Claims.ClaimTypes.NameIdentifier)?.Value;
            var transaksi = await _fullstackDbContext.Transaksi.FindAsync(id);
            if (transaksi == null)
            {
                return NotFound();
            }
            transaksi.tanggal_transaksi = req.tanggal_transaksi;
            transaksi.kode_transaksi = req.kode_transaksi;
            transaksi.nominal_transaksi = req.nominal_transaksi;
            transaksi.created_by = transaksi.created_by;
            transaksi.created_date = DateTime.Now;
            transaksi.updated_by = uname;
            transaksi.updated_date = DateTime.Now;

            await _fullstackDbContext.SaveChangesAsync();
            return Ok(transaksi);
        }

        // DELETE: /<controllers>/
        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> deleteTransaksi([FromRoute] Guid id)
        {
            var transaksi = await _fullstackDbContext.Transaksi.FindAsync(id);
            if (transaksi == null)
            {
                return NotFound();
            }

            _fullstackDbContext.Transaksi.Remove(transaksi);
            await _fullstackDbContext.SaveChangesAsync();

            return Ok(transaksi);
        }
    }
}

