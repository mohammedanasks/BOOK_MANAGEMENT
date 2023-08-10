using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Dtos.BaseEntity;

namespace API.Dtos.Author
{
    public class BookAuthorDto  : BaseEntityDto
    {
       
        public int? AuthorId{get;set;}
        public string? AuthorName{get;set;}
        public string? BookName{get;set;}
        public int? BookId {get;set;}
    }
}