using System;
namespace MVC_API.Models
{
	public class TransaksiTabungan
	{
        public Guid id { get; set; }
        public DateTime tanggal_transaksi { get; set; }
        public long nominal_transaksi { get; set; }
        public long created_by { get; set; }
        public DateTime created_date = DateTime.Now;
        public long updated_by { get; set; }
        public DateTime updated_date = DateTime.Now;
    }
}

