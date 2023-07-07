using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MVC_API.Data;
using MVC_API.Models;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MVC_API.Controllers
{
    [ApiController]
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
            var result = from transaksi in _fullstackDbContext.Transaksi
                         join jenis_transaksi in _fullstackDbContext.JenisTransaksi
                         on transaksi.kode_transaksi equals jenis_transaksi.kode_transaksi into Trx
                         from jt in Trx.DefaultIfEmpty()
                         join user in _fullstackDbContext.User
                         on transaksi.created_by equals user.username into User
                         from usr in User.DefaultIfEmpty()
                         select new
                         {
                             id = transaksi.id,
                             tanggal_transaksi = transaksi.tanggal_transaksi.ToString("dd-MM-yyyy"),
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
            var transaksi = _fullstackDbContext.Transaksi.FirstOrDefault(x => x.id == id);
            if (transaksi == null)
            {
                return NotFound();
            }

            return Ok(transaksi);
        }

        // PUT: /<controllers>/
        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> updateTransaksi([FromRoute] Guid id, Transaksi req)
        {
            var transaksi = await _fullstackDbContext.Transaksi.FindAsync(id);
            if (transaksi == null)
            {
                return NotFound();
            }
            transaksi.tanggal_transaksi = req.tanggal_transaksi;
            transaksi.kode_transaksi = req.kode_transaksi;
            transaksi.nominal_transaksi = req.nominal_transaksi;
            transaksi.created_by = req.created_by;
            transaksi.created_date = DateTime.Now;
            transaksi.updated_by = req.updated_by;
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

