using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Dtos.BaseEntity;

namespace API.Dtos.Book
{
    public class CategoryDto  : BaseEntityDto
    {
         public string? Name{get;set;}
      
          public string? Description{get;set;}
    }
}