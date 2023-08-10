using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;
using API.Dtos.BaseEntity;
using API.Entities.fine;
using API.Entities.Borrow;

namespace API.Entities.Students
{
    public class Student : BaseEntity
    {        
        public string? Name{set;get;}
        public  Department?  Department{set;get;}
        public int DepartmentId{set;get;}
    }

    
}