import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BookDto } from 'app/dtos/Book/bookDto';
import { BookService } from 'app/services/Book/Book.service';
import { PeriodicElement } from 'assets/examples/material/basic-table/basic-table.component';



@Component({
  selector: 'app-book-by-category',
  templateUrl: './book-by-category.component.html',
  styleUrls: ['./book-by-category.component.css']
})
export class BookByCategoryComponent implements OnInit {

  displayedColumns: string[] = ["Id",'Name','Category'];
  FictionSource : any
  TechnologySource : any
  AutobioGraphySource:any
  clickedRows = new Set<PeriodicElement>();

  constructor(private service: BookService) { }

  ngOnInit(): void {
    this.getDatas()
  }

FictionBooks:any[]
Technology:any[]
AutoBiography:any[]
Bookdata :BookDto[]
getDatas(){
  this.service.GetBooks().subscribe(x=>{
   this.Bookdata=x.items
   this.FictionBooks=this.Bookdata.filter(x=>
   x.category.includes("Fiction"))
  this.FictionSource= new MatTableDataSource(this.FictionBooks)

  this.Technology=this.Bookdata.filter(x=>
    x.category.includes("tech"))
   this.TechnologySource= new MatTableDataSource(this.Technology)

   this.AutoBiography=this.Bookdata.filter(x=>
    x.category.includes("AutoBiography"))
   this.AutobioGraphySource= new MatTableDataSource(this.AutoBiography)
  })
}

}
