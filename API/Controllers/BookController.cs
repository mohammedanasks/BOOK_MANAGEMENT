using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Dtos.Book;
using API.Services.Books;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using  API.Dtos.BorrowBook;
using API.Entities;
using API.Dtos.Fine;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BookController : ControllerBase
    {
        private readonly BookServices _services;
          
        public BookController(BookServices services){
             _services = services;
             
        }
        [HttpPost("AddBook")]
           public async Task<IActionResult>AddBook([FromBody]BookDto Dto){

            var result=await _services.AddBook(Dto);
            return  Ok(result);
            
           }

        [HttpPost("AddBorrowBook")]
           public async Task<IActionResult>AddBorrowBook([FromBody]BorrowBooksDto Dto){

            var result=await _services.AddBorrowBook(Dto);
            return  Ok(result);
            
           }   
        [HttpGet("GetBooks")]
           public async Task<IActionResult>GetBooks(){

            var result=await _services.GetBooks();
            return  Ok(result);
            
           }

             [HttpGet("GetBookAuthors")]
           public async Task<IActionResult>GetBookAuthors(){

            var result=await _services.GetBookAuthors();
            return  Ok(result);
            
           }
             [HttpGet("GetBorrowBooks")]
           public async Task<IActionResult>GetBorrowBooks(){

            var result=await _services.BorrowBooksOrginal();
            return  Ok(result);
            
           }

               [HttpGet("GetFinedBooks")]
           public async Task<IActionResult>GetFinedBooks(){

            var result=await _services.FinedBorrowBooks();
            return  Ok(result);
            
           }

        
          
          [HttpDelete("{BookId}")]
        public async Task<ActionResult> DeleteBook([FromRoute] int BookId)
        {
            var result= await _services.DeleteBook(BookId);
            return Ok(result);

        }   
        
             
        [HttpPost("SearchBook/{abc}")]
        public async Task<ActionResult> SearchBook([FromRoute] string abc)
        {
            var result= await _services.SearchBook(abc);
            return Ok(result);

        }   

           
        [HttpDelete("Borrow/{bookid}")]
        public async Task<ActionResult> DeleteBorrowBook([FromRoute] int BookId)
        {
            var result= await _services.DeleteBorrowBook(BookId);
            return Ok(result);

        }   
        
        [HttpDelete("CopyIncrement/{bookid}")]
        public async Task<ActionResult>CopyIncrement([FromRoute] int BookId)
        {
            var result= await _services.CopyIncrement(BookId);
            return Ok(result);

        } 

          [HttpPost("AddFine")]
           public async Task<IActionResult>AddFine([FromBody]FineDto Dto){

            var result=await _services.AddFine(Dto);
            return  Ok(result);
            
           }
        

        // [HttpGet("{StudentId}")]
        // public async Task<ActionResult>GetBorrowStudent([FromRoute]int StudentId)
        // {
        //    var result= await _services.GetBorrowStudent(StudentId);
        //    return Ok(result);
        // }

    }
}