﻿using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Register_Login.Models
{
    public class AppUser : IdentityUser
    {
        public string FullName { get; set; }
        public int Age { get; set; }
        public bool IsActive { get; set; } = false;
    }
}
