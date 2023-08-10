using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Dtos.Author;
using API.Dtos.BaseEntity;

namespace API.Dtos.Book
{
    public class BookDto : BaseEntityDto
    {
        public string? Name{set;get;}
        public string? Category{set;get;}
        public int CategoryId{set;get;}
        public virtual ICollection<BookAuthorDto>? BookAuthors { get; set;}
        public int Copies {get;set;}

        public string ? filename{get;set;}
        public FormFile ? file {get;set;}
 
    }
}