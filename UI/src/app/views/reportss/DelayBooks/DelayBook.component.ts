import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BookDto } from 'app/dtos/Book/bookDto';
import { BorrowBooksDto } from 'app/dtos/BorrowBook/borrowBooksDto';
import { BookService } from 'app/services/Book/Book.service';
import { PeriodicElement } from 'assets/examples/material/basic-table/basic-table.component';


@Component({
  selector: 'DelayBook-category',
  templateUrl: './DelayBook.component.html',
  styleUrls: ['./DelayBook.component.css']
})
export class DelayBookComponent implements OnInit {
  displayedColumns: string[] = ["Id",'StudentName','BookName','ReturnDate','Days','Fine'];
  BorrowedSource : any
 
  clickedRows = new Set<PeriodicElement>();

  constructor(private service: BookService) { }

  ngOnInit(): void {
    this.getDatas()
  }

Borrowed : any[]
fine : any
Bookdata :BorrowBooksDto[]
getDatas(){
  this.service.GetFinedBooks().subscribe(x=>{
   this.Bookdata=x.items
   this.BorrowedSource= new MatTableDataSource(this.Bookdata) 
  })
}
}
