import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BookDto } from 'app/dtos/Book/bookDto';
import { BorrowBooksDto } from 'app/dtos/BorrowBook/borrowBooksDto';
import { BookService } from 'app/services/Book/Book.service';
import { PeriodicElement } from 'assets/examples/material/basic-table/basic-table.component';

@Component({
  selector: 'BorrowedBooks-category',
  templateUrl: './BorrowedBooks.component.html',
  styleUrls: ['./BorrowedBooks.component.css']
})
export class BorrowedBookComponent implements OnInit {

  displayedColumns: string[] = ["Id",'StudentName','BookName','ReturnDate'];
  BorrowedSource : any
 
  clickedRows = new Set<PeriodicElement>();

  constructor(private service: BookService) { }

  ngOnInit(): void {
    this.getDatas()
  }

Bookdata :BorrowBooksDto[]
getDatas(){
  this.service.GetBorrowBooks().subscribe(x=>{
   this.Bookdata=x.items
  this.BorrowedSource=new MatTableDataSource(this.Bookdata)
  console.log(this.BorrowedSource)

  })
}
}
