using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;
using API.Dtos.BaseEntity.ResponseModel;
using API.Dtos.Author;
using AutoMapper;
using API.Entities.Authors;
using API.Dtos.Book;
using API.Dtos.Department;
using Microsoft.EntityFrameworkCore;
using API.Dtos.IdTextDto;

namespace API.Services.InserData
{
    public class DataServices
    {
        private readonly DataContext _dataContext;
        public IMapper _mapper { get; }
  
      public DataServices(DataContext dataContext,IMapper mapper){
            _mapper = mapper;   
            _dataContext = dataContext;
      }
     
         
         public async Task<ResponseModel<AuthorDto>>AddAuthor(AuthorDto Dto){
           try
            {
                var model = _mapper.Map<Author>(Dto);
                var res = await _dataContext.AddAsync(model);
                await _dataContext.SaveChangesAsync();
            }
            catch (System.Exception ex)
            {
            throw;
            }
            ResponseModel<AuthorDto> response = new ResponseModel<AuthorDto>();
            return response;
         }
         
   
         
         public async Task<ResponseModel<CategoryDto>>AddCategory(CategoryDto Dto){
           try
            {
                var model = _mapper.Map<Category>(Dto);
                var res = await _dataContext.AddAsync(model);
                await _dataContext.SaveChangesAsync();
            }
            catch (System.Exception ex)
            {
            throw;
            }
            ResponseModel<CategoryDto> response = new ResponseModel<CategoryDto>();
            return response;
         }

          public async Task<ResponseModel<DepartmentDto>>AddDepartment(DepartmentDto Dto){
           try
            {
                var model = _mapper.Map<Department>(Dto);
                var res = await _dataContext.AddAsync(model);
                await _dataContext.SaveChangesAsync();
            }
            catch (System.Exception ex)
            {
            throw;
            }
            ResponseModel<DepartmentDto> response = new ResponseModel<DepartmentDto>();
            return response;
         }

           public async Task<ResponseModel<DepartmentDto>> GeDepartments()
        {
            ResponseModel<DepartmentDto> response = new ResponseModel<DepartmentDto>();
            try
            {
                var entite = await _dataContext.Departments.ToListAsync();
                var models = _mapper.Map<List<DepartmentDto>>(entite);
                response.Items = models;
                return response;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }

         public async Task<ResponseModel<CategoryDto>> GetCategory()
        {
            ResponseModel<CategoryDto> response = new ResponseModel<CategoryDto>();
            try
            {
                var entite = await _dataContext.Categories.ToListAsync();
                var models = _mapper.Map<List<CategoryDto>>(entite);
                response.Items = models;
                return response;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }

         public async Task<ResponseModel<IdTextDto>> GetAuthorsForSelect()
        {
            ResponseModel<IdTextDto> response = new ResponseModel<IdTextDto>();
            try
            {
                var entite = await _dataContext.Authors.Select(x => new IdTextDto
                {
                    Id = x.Id,
                    Text = x.Name
                }).ToListAsync();
                response.Items = entite;
                return response;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }

            

    }
}