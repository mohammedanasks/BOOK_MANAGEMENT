using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;
using API.Dtos.BaseEntity;

namespace API.Dtos.Students
{
    public class StudentDto : BaseEntityDto
    {
      public string? Name{set;get;}
     
      public int DepartmentId{set;get;}
      public string? Department{set;get;}


    }

    
}