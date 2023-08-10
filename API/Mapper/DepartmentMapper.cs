

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

namespace API.Mapper
{
   public class     DepartmentMappingProfile : Profile {
     public   DepartmentMappingProfile() {
         // Add as many of these lines as you need to map your objects

        
           CreateMap<Department,DepartmentDto>();
         CreateMap<DepartmentDto, Department>();
      
     }
 }
    
}