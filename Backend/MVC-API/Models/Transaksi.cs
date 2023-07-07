using System;
namespace MVC_API.Models
{
	public class Transaksi
	{
        public Guid id { get; set; }
        public DateTime tanggal_transaksi { get; set; }
        public string kode_transaksi { get; set; }
        public long nominal_transaksi { get; set; }
        public string created_by { get; set; }
        public DateTime created_date = DateTime.Now;
        public string updated_by { get; set; }
        public DateTime updated_date = DateTime.Now;
    }
}

