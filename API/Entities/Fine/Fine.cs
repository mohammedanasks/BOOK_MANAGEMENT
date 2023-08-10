using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using API.Entities.Students;

namespace API.Entities.fine
{
    public class Fine: BaseEntity

    {

        public int Amount {get;set;}
        
        // public Department? Department{get;set;}
        // public int DepartmentId{get;set;}

        public Student? Student{get;set;}

        public int StudentId{get;set;}

        
    }
}
