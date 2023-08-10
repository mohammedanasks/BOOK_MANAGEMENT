using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities.Borrow
{
    public class BorrowItems:BaseEntity
    {
        public BorrowBooks? BorrowBooks{get;set;}
        public int BorrowBooksId{get;set;}

        public Book? Book{get;set;}
        public int BookId{get;set;}
    }
}