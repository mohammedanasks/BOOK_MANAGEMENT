using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Dtos.Book;
using API.Entities;
using AutoMapper;
using API.Entities;
using API.Dtos.BaseEntity.ResponseModel;
using Microsoft.EntityFrameworkCore;
using API.Dtos.Author;
using API.Dtos.BorrowBook;
using API.Dtos.Fine;
using API.Entities.fine;
using API.Entities.Borrow;
using API.Dtos.IdTextDto;

namespace API.Services.Books
{


    public class BookServices
    {
        private readonly DataContext _DataContext;
        public IMapper _Mapper { get; }
        public BookServices(DataContext DataContext, IMapper mapper)
        {
            _Mapper = mapper;
            _DataContext = DataContext;
        }
        public async Task<ResponseModel<BookDto>> AddBook(BookDto Dto)
        {
            try
            {
                var model = _Mapper.Map<Book>(Dto);
                var res = await _DataContext.AddAsync(model);
                await _DataContext.SaveChangesAsync();
            }
            catch (System.Exception ex)
            {
                throw;
            }
            ResponseModel<BookDto> response = new ResponseModel<BookDto>();
            return response;
        }
        public async Task<ResponseModel<FineDto>> AddFine(FineDto Dto)
        {
            try
            {
                var model = _Mapper.Map<Fine>(Dto);
                var res = await _DataContext.AddAsync(model);
                await _DataContext.SaveChangesAsync();
            }
            catch (System.Exception ex)
            {
                throw;
            }
            ResponseModel<FineDto> response = new ResponseModel<FineDto>();
            return response;
        }
        public async Task<ResponseModel<BorrowBooksDto>> AddBorrowBook(BorrowBooksDto Dto)
        {
            ResponseModel<BorrowBooksDto> response = new ResponseModel<BorrowBooksDto>();
            try
            {
                var model = _Mapper.Map<BorrowBooks>(Dto);
                var StudentCount = _DataContext.BorrowBooks.Where(x => x.StudentId == model.StudentId).Count();
                var data = model.BorrowItems.Select(x => x.BookId).FirstOrDefault();
                var check = _DataContext.Books.AsQueryable().Where(x => x.Id == data).FirstOrDefault();
                int copy = check.Copies;
                if (copy > 0)
                {
                    if (StudentCount < 3)
                    {
                        var book = await _DataContext.Books.AsQueryable().Where(x => x.Id == data).FirstOrDefaultAsync();
                        book.Copies--;
                        _DataContext.Books.Update(book);
                        var res = await _DataContext.AddAsync(model);
                        await _DataContext.SaveChangesAsync();
                    }
                    else
                    {
                        response.IsOk = false;
                        response.Message = "Your Limit Reached ! Max limit is 3";
                    }

                }
                else
                {
                    response.IsOk = false;
                    response.Message = "Oops..Out Of Stock";
                }

            }
            catch (System.Exception ex)
            {
                throw;
            }

            return response;
        }
        public async Task<ResponseModel<BookDto>> GetBooks()
        {
            ResponseModel<BookDto> response = new ResponseModel<BookDto>();
            try
            {
                var res = await _DataContext.Books.Include(x => x.Category)
                .Include(x => x.BookAuthors).ThenInclude(x => x.Author).ToListAsync();
                res.ForEach(book =>
                {
                    var auth = _DataContext.BookAuthors.Where(x => x.BookId == book.Id).ToList();
                    var authers = _Mapper.Map<List<BookAuthorDto>>(auth);
                    book.BookAuthors = auth;
                });

                var books = _Mapper.Map<List<BookDto>>(res);
                response.Items = books;

                return response;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        public async Task<ResponseModel<BookAuthorDto>> GetBookAuthors()
        {
            ResponseModel<BookAuthorDto> response = new ResponseModel<BookAuthorDto>();
            try
            {
                var res = await _DataContext.BookAuthors.Include(x => x.Book)
                .Include(x => x.Author).ToListAsync();


                var books = _Mapper.Map<List<BookAuthorDto>>(res);
                response.Items = books;

                return response;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        public async Task<ResponseModel<BorrowBooksDto>> BorrowBooksOrginal()
        {
            ResponseModel<BorrowBooksDto> response = new ResponseModel<BorrowBooksDto>();
            try
            {
                var Today = DateTime.Now;
                int FinePerday = 10;
                var res = await _DataContext.BorrowBooks.Include(x => x.BorrowItems).ThenInclude(x => x.Book)
                // .Include(x=>x.Department)
                .Include(x => x.Student).ToListAsync();

                var model = _Mapper.Map<List<BorrowBooksDto>>(res);
                model.ForEach(x =>
                {
                    var ReturnDate = (Today - x.ReturnDate).TotalDays;
                    var Fine = FinePerday * ReturnDate;
                    int FineAmount = Convert.ToInt32(Fine);
                    int Day = Convert.ToInt32(ReturnDate);
                    x.Fine = FineAmount;
                    x.Days = Day;
                });
                response.Items = model;

            }
            catch (System.Exception ex)
            {
                throw;
            }
            return response;

        }
        public async Task<ResponseModel<BorrowBooksDto>> FinedBorrowBooks()
        {
            ResponseModel<BorrowBooksDto> response = new ResponseModel<BorrowBooksDto>();
            try
            {
                var Today = DateTime.Now;
                int FinePerday = 10;
                var res = await _DataContext.BorrowBooks.Include(x => x.BorrowItems).ThenInclude(x => x.Book)
                // .Include(x=>x.Department)
                .Include(x => x.Student).ToListAsync();

                var model = _Mapper.Map<List<BorrowBooksDto>>(res);
                model.ForEach(x =>
                {
                    var ReturnDate = (Today - x.ReturnDate).TotalDays;
                    var Fine = FinePerday * ReturnDate;
                    int FineAmount = Convert.ToInt32(Fine);
                    int Day = Convert.ToInt32(ReturnDate);
                    x.Fine = FineAmount;
                    x.Days = Day;
                });
                var sd = model.Where(x => x.Fine > 0).ToList();
                response.Items = sd;
            }
            catch (System.Exception ex)
            {
                throw;
            }
            return response;

        }
        public async Task<ResponseModel<BookDto>> DeleteBook(int BookId)
        {
            ResponseModel<BookDto> response = new ResponseModel<BookDto>();
            try
            {
                var book = await _DataContext.Books.AsQueryable().
                Where(x => x.Id == BookId).Include(x => x.BookAuthors).FirstOrDefaultAsync();
                if (book != null)
                {
                    _DataContext.Books.Remove(book);
                    await _DataContext.SaveChangesAsync();
                }
            }
            catch (System.Exception ex)
            {
                throw;
            }
            return response;

        }
        public async Task<ResponseModel<BorrowBooksDto>> DeleteBorrowBook(int bookid)
        {
            ResponseModel<BorrowBooksDto> response = new ResponseModel<BorrowBooksDto>();
            try
            {
                var book = await _DataContext.BorrowBooks.AsQueryable().Where(x => x.Id == bookid).FirstOrDefaultAsync();
                if (book != null)
                {
                    _DataContext.BorrowBooks.Remove(book);
                    await _DataContext.SaveChangesAsync();
                }
            }
            catch (System.Exception ex)
            {
                throw;
            }
            return response;
        }
        public async Task<ResponseModel<IdTextDto>> CopyIncrement(int bookid)
        {
            ResponseModel<IdTextDto> response = new ResponseModel<IdTextDto>();
            try
            {
                var book = await _DataContext.Books.AsQueryable().Where(x => x.Id == bookid).FirstOrDefaultAsync();
                if (book != null)
                {
                    book.Copies++;
                    _DataContext.Books.Update(book);
                    await _DataContext.SaveChangesAsync();
                }
            }
            catch (System.Exception ex)
            {
                throw;
            }
            return response;
        }
        public async Task<ResponseModel<BookDto>> SearchBook(string SearchBook)
        {
            ResponseModel<BookDto> response = new ResponseModel<BookDto>();
            try
            {
                var book = await _DataContext.Books.AsQueryable()
                .Where(x => EF.Functions.Like(x.Name, "%" + SearchBook + "%"))
                .Include(x => x.Category)
                .Include(x => x.BookAuthors).ThenInclude(x => x.Author)
                .ToListAsync();
                if (book != null)
                {
                    var model = _Mapper.Map<List<BookDto>>(book);
                    response.Items = model;
                    response.IsOk = true;

                }
                else
                {
                    response.IsOk = false;
                }

            }
            catch (System.Exception ex)
            {
                throw;
            }

            if (response.IsOk == true)
            {
                response.Message = "gotit";

            }
            if (response.IsOk == false)
            {
                response.Message = "notfound";

            }
            return response;

        }
    }


}
// var ids =idss.Split(",");
// var entite = _dataContext.StudentStatuses.Where(x => x.Id == 10).First();
// var w = _dataContext.StudentStatuses.Where(x => x.Id == 10).FirstOrDefault();
// var wew = _dataContext.StudentStatuses.Where(x => x.Id == 10).ToList();
// var rf = _dataContext.StudentStatuses.AsNoTracking().Where(x => x.Id == 10).AsQueryable();
// var entite = _dataContext.StudentStatuses.AsNoTracking().Where(x => x.Id == 10).CountAsync();
// var name = _dataContext.Students.AsNoTracking().Where(x => x.Id == 10).Select(x => x.StudentName).FirstOrDefault();
// var edsdsntite = _dataContext.StudentStatuses.AsNoTracking().Where(x => x.Id == 10).First();
// var ensdsdtite =await _dataContext.Books.Where(x => x.Id == 10).Include(x => x.BookAuthors).ThenInclude(x => x.Author).FirstOrDefaultAsync();

