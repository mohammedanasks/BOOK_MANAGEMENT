using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Dtos.BaseEntity.ResponseModel;
using API.Dtos.Book;

using API.Dtos.Students;
using API.Entities;
using API.Entities.Students;
using AutoMapper;
using Microsoft.EntityFrameworkCore;

namespace API.Services.Students
{
    public class StudenService
    {
       
    
        private readonly DataContext _DataContext;
        public IMapper _Mapper { get; }
        public StudenService (DataContext DataContext,IMapper mapper ){
            _Mapper = mapper;
              _DataContext = DataContext;
        }
            
        public async Task<ResponseModel<StudentDto>>AddStudent(StudentDto Dto){
            try
            {
                var model = _Mapper.Map<Student>(Dto);
                var res = await _DataContext.AddAsync(model);
                await _DataContext.SaveChangesAsync();
            }
            catch (System.Exception ex)
           {
            throw;
           }
            ResponseModel<StudentDto> response = new ResponseModel<StudentDto>();
            return response;
        }    


        
        public async Task<ResponseModel<StudentDto>> GetStudents(){
            ResponseModel<StudentDto> response = new ResponseModel<StudentDto>();
            try
            {
                var res = await _DataContext.Students.Include(x=>x.Department).ToListAsync();
                var students = _Mapper.Map<List<StudentDto>>(res);
                response.Items = students;
                
            return response;
            }
            catch (System.Exception ex)
           {
            throw;
           }
        }    

         public async Task<ResponseModel<StudentDto>> GetSingleStudent(int StudentId){
            ResponseModel<StudentDto> response = new ResponseModel<StudentDto>();
            try
            {
                var res = _DataContext.Students.Where(x=>x.Id==StudentId).FirstOrDefault();
                var student = _Mapper.Map<StudentDto>(res);
                response.Item = student;
                
            return response;
            }
            catch (System.Exception ex)
           {
            throw;
           }
        }    

            public async Task<ResponseModel<StudentDto>>DeleteStudent( int StudentId){
               ResponseModel<StudentDto> response = new ResponseModel<StudentDto>();
                try{
                var student = await _DataContext.Students.FindAsync(StudentId);
                if (student!=null){
                    _DataContext.Students.Remove(student);
                    await _DataContext.SaveChangesAsync();
                }
                }
                catch(System.Exception ex)
                {
                throw;
                }
                return response;
            }

              public async Task<ResponseModel<StudentDto>>UpdateStudent(StudentDto stu)
        {
                 ResponseModel<StudentDto> response = new ResponseModel<StudentDto>();
                try{
                var student = _Mapper.Map<Student>(stu);   
                if (student!=null){
                    _DataContext.Students.Update(student);
                    await _DataContext.SaveChangesAsync();
                }
                }
                catch(System.Exception ex)
                {
                throw;
                }
                return response;
             

         
        }

        }
        
      
    
        
    }








//    var response = await ValidateAddAsync(_Bill);
//             if(response.IsOk == true)
//             {
//                 var res =  _dataContext.Bills.Update(_Bill);
//                 await _dataContext.SaveChangesAsync();
//                 if(res != null)
//                 {
//                     response.IsOk = true;
//                     response.Message = "Succusssfully Updted";
//                 }
//                 else
//                 {
//                     response.IsOk = false;
//                     response.Message = "Updation Failed";
//                 }
//             }
//             return response;