﻿using System;
namespace MVC_API.Models
{
	public class Employee
	{
		public Guid id { get; set; }
		public string name { get; set; }
		public string email { get; set; }
		public long phone { get; set; }
		public long salary { get; set; }
		public string departement { get; set; }
	}
}

