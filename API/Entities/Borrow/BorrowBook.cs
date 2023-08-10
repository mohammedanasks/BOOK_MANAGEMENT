using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities.Students;
using API.Dtos.BaseEntity;

namespace API.Entities.Borrow
{
    public class BorrowBooks : BaseEntity
    {
        public Student? Student {get;set;}
        public int StudentId {get;set;}
        public DateTime ReturnDate {get;set;}
        // public Department? Department {get;set;}
        // public int DepartmentId {get; set;}
        public virtual ICollection<BorrowItems>? BorrowItems {get;set;}
        
    }
}