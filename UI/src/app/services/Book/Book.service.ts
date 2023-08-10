import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookAuthorDto } from 'app/dtos/Autors/bookAuthorDto';
import { ResponseModel } from 'app/dtos/base/responseModel';
import { BookDto } from 'app/dtos/Book/bookDto';
import { CategoryDto } from 'app/dtos/BookCategory/categoryDto';
import { BorrowBooksDto } from 'app/dtos/BorrowBook/borrowBooksDto';
import { FineDto } from 'app/dtos/fine/fineDto';

import { IdTextDto } from 'app/dtos/IdTextDto/idTextDto';


import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private BaseURL = 'https://localhost:7251/api/';

  

  constructor(private http: HttpClient) {}

 

  public AddBook(model: BookDto): Observable<ResponseModel<BookDto>> {
    return this.http.post(this.BaseURL + 'Book/AddBook', model).pipe(
      map((response: ResponseModel<BookDto>) => {
        return response;
      }),
      catchError((error) => {
        let res = new ResponseModel<BookDto>();
        res.isOk = false;
        res.item = model;
        if (error.error instanceof ErrorEvent) {
          res.message = `Error: ${error.error.message}`;
        } else {
          res.message = `Error: ${error.message}`;
        }
        return of(res);
      })      
    );
  }

  public AddBorrowBook(model: BorrowBooksDto): Observable<ResponseModel<BorrowBooksDto>> {
    return this.http.post(this.BaseURL + 'Book/AddBorrowBook', model).pipe(
      map((response: ResponseModel<BorrowBooksDto>) => {
        return response;
      }),
      catchError((error) => {
        let res = new ResponseModel<BorrowBooksDto>();
        res.isOk = false;
        res.item = model;
        if (error.error instanceof ErrorEvent) {
          res.message = `Error: ${error.error.message}`;
        } else {
          res.message = `Error: ${error.message}`;
        }
        return of(res);
      })
    );
  }
  public AddFine(model: FineDto): Observable<ResponseModel<FineDto>> {
    return this.http.post(this.BaseURL + 'Book/AddFine', model).pipe(
      map((response: ResponseModel<FineDto>) => {
        return response;
      }),
      catchError((error) => {
        let res = new ResponseModel<FineDto>();
        res.isOk = false;
        res.item = model;
        if (error.error instanceof ErrorEvent) {
          res.message = `Error: ${error.error.message}`;
        } else {
          res.message = `Error: ${error.message}`;
        }
        return of(res);
      })
    );
  }

  public GetCategories():Observable<ResponseModel<CategoryDto>>{
    return this.http.get<ResponseModel<CategoryDto>>(this.BaseURL+'Data/GetCategory')
  }

  public GetAuthorsForSelect():Observable<ResponseModel<IdTextDto>>{
    return this.http.get<ResponseModel<IdTextDto>>(this.BaseURL+'Data/GetAuthorsForSelect')
  }

  public GetBooks():Observable<ResponseModel<BookDto>>{
    return this.http.get<ResponseModel<BookDto>>(this.BaseURL+'Book/GetBooks')
  }
  public DeleteBook(BookId:number|string):Observable<ResponseModel<BookDto>>{
    return this.http.delete<ResponseModel<BookDto>>(this.BaseURL + `Book/${BookId}`);
  }
  public SearchBook(bookmodels: string):Observable<ResponseModel<BookDto>>{
    return this.http.post<ResponseModel<BookDto>>(this.BaseURL+'Book/SearchBook/'+bookmodels,{})
  }
  public GetBorrowBooks():Observable<ResponseModel<BorrowBooksDto>>{
    return this.http.get<ResponseModel<BorrowBooksDto>>(this.BaseURL+'Book/GetBorrowBooks')
  }
  public GetBookAuthors():Observable<ResponseModel<BookAuthorDto>>{
    return this.http.get<ResponseModel<BookAuthorDto>>(this.BaseURL+'Book/GetBookAuthors')
  }
  public GetFinedBooks():Observable<ResponseModel<BorrowBooksDto>>{
    return this.http.get<ResponseModel<BorrowBooksDto>>(this.BaseURL+'Book/GetFinedBooks')
  }

  public DeleteBorrowBook(bookid : number|string):Observable<ResponseModel<BorrowBooksDto>>{
    return this.http.delete<ResponseModel<BorrowBooksDto>>(this.BaseURL+`Book/Borrow/${bookid}`);
  }
  
  public CopyIncrement(bookid : number|string):Observable<ResponseModel<IdTextDto>>{
    return this.http.delete<ResponseModel<IdTextDto>>(this.BaseURL+`Book/CopyIncrement/${bookid}`);
  }
  // public GetBorrowStudent(StudentId: number):Observable<ResponseModel<BorrowBooksDto>>{
  //   return this.http.get<ResponseModel<BorrowBooksDto>>(this.BaseURL+`Book/${StudentId}`)
  // }




  // UpdateItem(model: itemDto):Observable<ResponseModel<itemDto>>{
  //   return this.http.put(this.BaseURL+'Item/UpdateItem',model);
  // }

}


