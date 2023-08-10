using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;
using API.Dtos.BaseEntity;
namespace API.Entities
{
    public class Category : BaseEntity
    {

        public string? Name{get;set;}
        public string? Description{get;set;}
    

     
        
    }
}