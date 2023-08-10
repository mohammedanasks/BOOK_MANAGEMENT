using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Dtos.BaseEntity;
using Microsoft.EntityFrameworkCore;

namespace API.Entities.Authors 
{
    
    public class BookAuthor : BaseEntityDto
    {
        public Book? Book{get;set;}
        public int? BookId {get;set;}
        public Author? Author{get;set;}
        public int? AuthorId{get;set;}
    }
}