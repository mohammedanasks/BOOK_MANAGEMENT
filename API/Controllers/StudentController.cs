using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Dtos.Book;
using API.Services.Books;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
 using API.Services.Students;

using API.Dtos.Students;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class   StudentController : ControllerBase
    {
 
        public StudenService Services { get; }
          
        public StudentController(StudenService services){
            Services = services;
           
             
        }
        [HttpPost("AddStudent")]
           public async Task<IActionResult>AddStudent([FromBody]StudentDto Dto){

            var result=await Services.AddStudent(Dto);
            return  Ok(result);
            
           }

            
        [HttpDelete("{StuId}")]
        public async Task<ActionResult> DeleteBook([FromRoute] int StuId)
        {
            var result= await Services.DeleteStudent(StuId);
            return Ok(result);

        }     

          [HttpGet("GetStudents")]
           public async Task<IActionResult>GetStudents(){

            var result=await Services.GetStudents();
            return  Ok(result);
            
           }  

        [HttpPut("UpdateStudent")]
        public async Task<IActionResult> UpdateStudent([FromBody] StudentDto model)
        {
            var result = await Services.UpdateStudent(model);
            return Ok(result);
        }  

        [HttpGet("{StuId}")]
        public async Task<ActionResult> GetSingleStudent([FromRoute] int StuId)
        {
            var result= await Services.GetSingleStudent(StuId);
            return Ok(result);
        }    

    }
}