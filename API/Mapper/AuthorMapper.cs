using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Dtos.Author;
using API.Entities;
using API.Entities.Authors;
using AutoMapper;

namespace API.Mapper
{
   public class     AuthorMappingProfile : Profile {
     public   AuthorMappingProfile() {
         // Add as many of these lines as you need to map your objects
         CreateMap<Author, AuthorDto>();
         CreateMap<AuthorDto, Author>();
        CreateMap<BookAuthor, BookAuthorDto>().
        ForMember(x=>x.AuthorName,option=>option.MapFrom(src=>src.Author.Name)).
        ForMember(x=>x.BookName,option=>option.MapFrom(src=>src.Book.Name));
        CreateMap<BookAuthorDto, BookAuthor>();
        
      
     }
 }
    
}
