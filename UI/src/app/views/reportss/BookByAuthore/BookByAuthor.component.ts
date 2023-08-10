import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BookAuthorDto } from 'app/dtos/Autors/bookAuthorDto';
import { BookDto } from 'app/dtos/Book/bookDto';
import { BookService } from 'app/services/Book/Book.service';
import { PeriodicElement } from 'assets/examples/material/basic-table/basic-table.component';

@Component({
  selector: 'app-BookByAuthor',
  templateUrl: './BookByAuthor.component.html',
  styleUrls: ['./BookByAuthor.component.css']
})
export class BookByAuthorComponent implements OnInit {

  displayedColumns: string[] = ["Id",'BookName','AuthorName'];
  AlexSource: any
  AnasSource : any
  
  clickedRows = new Set<PeriodicElement>();

  constructor(private service: BookService) { }

  ngOnInit(): void {

    this.getDatas()
  }

alexBooks:any[]
anasBooks:any[]
Bookdata :BookAuthorDto[]
getDatas(){
  this.service.GetBookAuthors().subscribe(x=>{
   this.Bookdata=x.items
   console.log(this.Bookdata)
   
  this.alexBooks=this.Bookdata.filter(x=>
    x.authorName.includes("alex"))
   this.AlexSource= new MatTableDataSource(this.alexBooks)

   this.anasBooks=this.Bookdata.filter(x=>
    x.authorName.includes("anas"))
   this.AnasSource= new MatTableDataSource(this.anasBooks)
    
 

  
  



  //  this.AutoBiography=this.Bookdata.filter(x=>
  //   x.category.includes("AutoBiography"))
  //  this.AutobioGraphySource= new MatTableDataSource(this.AutoBiography)
  })
}


}
