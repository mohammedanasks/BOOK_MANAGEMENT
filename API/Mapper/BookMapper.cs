using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Dtos.Author;
using API.Dtos.Book;
using API.Entities;
using API.Entities.Authors;
using AutoMapper;
using API.Dtos.BorrowBook;
using API.Entities.fine;
using API.Dtos.Fine;
using  API.Entities.Borrow;

namespace API.Mapper
{
   public class     BookMappingProfile : Profile {
     public   BookMappingProfile() {
         // Add as many of these lines as you need to map your objects
         CreateMap<Book, BookDto>()
        .ForMember(x=>x.Category,option=>option.MapFrom(src=>src.Category.Name));
         CreateMap<BookDto, Book>();

         CreateMap<Category, CategoryDto>();
         CreateMap<CategoryDto, Category>();

         CreateMap<BorrowBooks,BorrowBooksDto>().
        //  ForMember(x=>x.DepartmentName,options=>options.MapFrom(src=>src.Department.DepartmentName)).
         ForMember(x=>x.StudentName,options=>options.MapFrom(src=>src.Student.Name));
         CreateMap<BorrowBooksDto, BorrowBooks>();

        CreateMap<Fine,FineDto>();
        CreateMap<FineDto,Fine>();
        CreateMap<BorrowItemsDto,BorrowItems>();
        CreateMap<BorrowItems,BorrowItemsDto>()
        
         .ForMember(x=>x.BookName,options=>options.MapFrom(src=>src.Book.Name)).
         ForMember(x=>x.Copies,options=>options.MapFrom(src=>src.Book.Copies));
        
      
     }
 }
    
}
