using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities.Authors;
using API.Dtos.BaseEntity;
using API.Entities.Borrow;
using Microsoft.AspNetCore.Http;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities
{
    public class Book : BaseEntity
    {
        
        public string? Name{set;get;}
        public string? Description{set;get;}

        public  Category?  Category{set;get;}
        public int CategoryId{set;get;}

        public virtual ICollection<BookAuthor>? BookAuthors { get; set;}
        public int Copies {get;set;}
        
        public string ? filename{get;set;}

         [NotMapped]
         public IFormFile ? file { set; get; }
      
        
    }

    
}