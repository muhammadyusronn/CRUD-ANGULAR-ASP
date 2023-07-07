using System;
namespace MVC_API.Models
{
	public class User
	{
        public Guid id { get; set; }
        public string nama { get; set; }
        public string username { get; set; }
        public string password { get; set; }
        public bool is_active = true;
        public DateTime created_date = DateTime.Now;
    }
}

