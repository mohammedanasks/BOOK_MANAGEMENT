using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Dtos.BaseEntity;

namespace API.Dtos.Department
{
    public class DepartmentDto  : BaseEntityDto
    {
        public string?  Name{get;set;}
    }
}