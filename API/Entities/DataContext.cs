using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using API.Entities.Authors;
using API.Entities.Students;
using API.Entities.fine;

namespace API.Entities
{
    public class DataContext : DbContext
    {

     public DataContext(DbContextOptions options): base(options){}
     
        //    protected override void OnModelCreating(ModelBuilder builder)
    //     {
    //         base.OnModelCreating(builder);
    //         builder.ApplyConfiguration(new BookAuthorMap());
    //     }    

        public DbSet<Borrow.BorrowBooks> BorrowBooks{get;set;}
        public DbSet<Student>Students{get;set;}
        public DbSet<Book> Books{get;set;}
        public DbSet<Author>Authors{get;set;}
        public DbSet<BookAuthor>BookAuthors{get;set;}

         public DbSet<Category>Categories{get;set;}
        
         public DbSet<Department>Departments{get;set;}

          public DbSet<Fine>StudentsFine{get;set;}

                 
 

        
    }
}