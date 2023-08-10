using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Dtos.BaseEntity;
using API.Dtos.Book;
using API.Dtos.BorrowBook;
using API.Entities.Borrow;

namespace API.Dtos.BorrowBook
{
    public class BorrowBooksDto : BaseEntityDto
    {
        
        public int Fine {get;set;}

        public int Days {get;set;}
        public string ? StudentName {get;set;} 
        public int StudentId {get;set;}
        public DateTime ReturnDate {get;set;}
        // public Department? Department {get;set;}
        // public int DepartmentId {get; set;}
        public virtual ICollection<BorrowItemsDto>? BorrowItems {get;set;}
    }
}