using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;
using API.Dtos.BaseEntity;
using API.Entities.Students;
using API.Entities.fine;
using API.Entities.Borrow;

namespace API.Entities
{
    public class Department : BaseEntity
    {
        public string? Name{get;set;}
       
    }
}