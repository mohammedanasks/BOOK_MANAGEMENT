using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using API.Dtos.Author;
using API.Dtos.BaseEntity;
using API.Entities.Authors;

namespace API.Entities.Authors 
{
    public class Author : BaseEntityDto
    {
        public string? Name{set;get;}

        public virtual ICollection<BookAuthor>?Author_books{get;set;}
        
    }
}