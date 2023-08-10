using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Dtos.BaseEntity;
using API.Dtos.Book;

namespace API.Dtos.Author
{
    public class AuthorDto  : BaseEntityDto
    {
        public string? Name{set;get;}

        public virtual ICollection<BookAuthorDto>?Author_books{get;set;}
    }
}