using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities.Borrow
{
    public class BorrowItemsDto:BaseEntity
    {
    
        public int BorrowBooksId{get;set;}
        public int BookId{get;set;}

        public string? BookName {get;set;}

        public int Copies {get;set;}
        

    }
}