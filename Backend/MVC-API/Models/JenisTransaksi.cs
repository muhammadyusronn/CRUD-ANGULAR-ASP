using System;
namespace MVC_API.Models
{
	public class JenisTransaksi
	{
        public Guid id { get; set; }
        public string kode_transaksi { get; set; }
        public string nama { get; set; }
        public string tipe { get; set; }
    }
}

