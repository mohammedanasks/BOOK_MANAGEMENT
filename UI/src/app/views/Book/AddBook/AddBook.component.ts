import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookAuthorDto } from 'app/dtos/Autors/bookAuthorDto';
import { BookDto } from 'app/dtos/Book/bookDto';
import { CategoryDto } from 'app/dtos/BookCategory/categoryDto';
import { BorrowBooksDto } from 'app/dtos/BorrowBook/borrowBooksDto';
import { IdTextDto } from 'app/dtos/IdTextDto/idTextDto';

import { DataService } from 'app/services/AddDataServices/Data.service';
import { BookService } from 'app/services/Book/Book.service';

@Component({
  selector: 'app-AddBook',
  templateUrl: './AddBook.component.html',
  styleUrls: ['./AddBook.component.css']
})
export class AddBookComponent implements OnInit {

  booksData: BookDto[];
  Book:BookDto
  Category : CategoryDto[]
  authors : IdTextDto[]
  search: string
  searchdata: BookDto[]
  show:boolean =  true;

  bookAuthorsForeDisplay : any[]

  serchauthorname : string
  listauthorname : IdTextDto
  message : string;
  



  constructor(private service : BookService,
    private route: ActivatedRoute) { }

  ngOnInit() { 
    this.GetBooks();
    this.route.params.subscribe(par => {
      if(par.id != null && par.id != 0 && par.id != undefined) {
        //get item detail from api
        // then bind to model
      }else {
        this.Book = new BookDto;
        this.Book.bookAuthors = new Array<BookAuthorDto>();
        this.Book.bookAuthors.push(new BookAuthorDto());
      }
     })

     this.service.GetAuthorsForSelect().subscribe(x=>{

      this.authors=x.items

     })

     this.service.GetCategories().subscribe(x=>{
      this.Category=x.items
     })

  } 
  removeAuthor(i: number) {
    if(this.Book.bookAuthors != null && this.Book.bookAuthors != undefined && this.Book.bookAuthors.length > 0) {
      this.Book.bookAuthors.splice(i,1);
    }
  }
    
  addAuthor() {
    this.Book.bookAuthors?? new Array<BookAuthorDto>();
    this.Book.bookAuthors.push(new BookAuthorDto());
    
  }

  AddBook(){
    
    this.listauthorname = new IdTextDto();
    this.service.AddBook(this.Book).subscribe(res=>{
    
      if(res.isOk==true){
        this.Book = new BookDto;
        this.Book.bookAuthors = new Array<BookAuthorDto>();
      
        this.Book.bookAuthors.push(new BookAuthorDto());
        
    this.GetBooks();
      }else{
        alert('fail')
      }
    })
  }
 


  GetBooks(){

    this.service.GetBooks().subscribe(res=>{
      
      if(res.isOk==true){
        this.booksData=res.items
        this.booksData.forEach(x=>{
         
        })
      
      }else{
        alert('fail')
      }
    })
  }
  DeleteBook(item : any){
    this.service.DeleteBook(item.id).subscribe(res=>{
      if(res.isOk==true){
      }else{
        alert('fail')
      }
    })
  }

  SearchBook(){
    this.service.SearchBook(this.search).subscribe(res=>{
      
    
        this.message=res.message
        alert(this.message)
        this.show=false;
       this.searchdata=res.items
       this.searchdata.forEach(x=>{
        this.bookAuthorsForeDisplay=x.bookAuthors
        this.bookAuthorsForeDisplay.forEach(x=>{
          this.serchauthorname=x.authorName
         
        })
       })


    
    })
  }

}
