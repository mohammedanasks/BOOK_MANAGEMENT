using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Dtos.Author;
using API.Dtos.Book;
using API.Dtos.Department;
using API.Services.InserData;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
     public class DataController : ControllerBase
    {

      
        private readonly DataServices _services;

      public DataController(DataServices services){
            _services = services;     
      }

       [HttpGet("GetDepartments")]
        public async Task<IActionResult> GetDepartments()
        {
            var result = await _services.GeDepartments();
            return Ok(result);
        }

        
          [HttpGet("GetCategory")]
        public async Task<IActionResult> GetCategory()
        {
            var result = await _services.GetCategory();
            return Ok(result);
        }

        
        [HttpGet("GetAuthorsForSelect")]
        public async Task<IActionResult> GetAuthorsForSelect()
        {
            var result = await _services.GetAuthorsForSelect();
            return Ok(result);
        }

         [HttpPost("AddAuthor")]
        public async Task<IActionResult> AddAuthor([FromBody] AuthorDto Dto)
        {
            var result = await _services.AddAuthor(Dto);
            return Ok(result);
        }
        [HttpPost("AddCategory")]
        public async Task<IActionResult> AddCategory([FromBody]CategoryDto Dto)
        {
            var result = await _services.AddCategory(Dto);
            return Ok(result);
        }
   
         [HttpPost("AddDepartment")]
        public async Task<IActionResult> AddDepartment([FromBody] DepartmentDto Dto)
        {
            var result = await _services.AddDepartment(Dto);
            return Ok(result);
        }

      

    }  

}