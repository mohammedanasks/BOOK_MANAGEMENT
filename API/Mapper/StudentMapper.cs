


using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Dtos.Author;
using API.Dtos.Book;
using API.Dtos.Department;

using API.Entities;
using API.Entities.Authors;
using AutoMapper;
using API.Entities.Students;
using API.Dtos.Students;

namespace API.Mapper
{
   public class     StudentMappingProfile : Profile {
     public   StudentMappingProfile() {
         // Add as many of these lines as you need to map your objects
         CreateMap<Student,StudentDto>().
         ForMember(x=>x.Department,options=>options.MapFrom(src=>src.Department.Name));
         CreateMap<StudentDto,Student>();
      
        
      
     }
 }
    
}
