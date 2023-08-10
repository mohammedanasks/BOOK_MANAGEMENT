import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { BookDto } from 'app/dtos/Book/bookDto';
import { BorrowBooksDto } from 'app/dtos/BorrowBook/borrowBooksDto';
import { BorrowItemsDto } from 'app/dtos/BorrowBookItems/borrowItemsDto';
import { DepartmentDto } from 'app/dtos/Department/departmentDto';
import { StudentDto } from 'app/dtos/Student/studentDto';
import { DataService } from 'app/services/AddDataServices/Data.service';
import { BookService } from 'app/services/Book/Book.service';
import { SharedService } from 'app/services/shared servicess/shared.service';
import { StudentService } from 'app/services/Student/Student.service';
import { getDate } from 'date-fns';
import { number } from 'echarts';
import { date } from 'ngx-custom-validators/src/app/date/validator';
import { Subscriber, Subscription } from 'rxjs';
import { AlertComponent } from './alertcomponet/alertcomponet.component';

@Component({
  selector: 'app-BorrowBook',
  templateUrl: './BorrowBook.component.html',
  styleUrls: ['./BorrowBook.component.css'],
})
export class BorrowBookComponent implements OnInit {
  clickeventfromalertcomponet:Subscription;
  students: StudentDto[];
  book: BookDto[];
  borrowBook: BorrowBooksDto;
  BorrowData: BorrowBooksDto[];
  reload:string

  constructor(
    private service: StudentService,
    private bookservice: BookService,
    private dialog: MatDialog,
    private route: ActivatedRoute,
    public datepipe: DatePipe,
    private shire : SharedService,
  
   ) {
    // this.clickeventfromalertcomponet=this.shire.gelclickevent().subscribe(()=>{
    //   window.location.reload()
    // })
   }
  

  ngOnInit() {
    this.route.params.subscribe((par) => {
      if (par.id != null && par.id != 0 && par.id != undefined) {
        //get item detail from api
        // then bind to model
      } else {
        this.borrowBook = new BorrowBooksDto;
        this.borrowBook.borrowItems = new Array<BorrowItemsDto>();
        this.borrowBook.borrowItems.push(new BorrowItemsDto());
      }
     
    
     
    });

    this.service.GetStudents().subscribe((res) => {
      this.students = res.items;
    });
    this.bookservice.GetBooks().subscribe((res) => {
      this.book = res.items;
    });
    this.getBorrowBooks();
  }

getBorrowBooks(){
  this.bookservice.GetBorrowBooks().subscribe((res) => {
    this.BorrowData = res.items;
    console.log(this.BorrowData)

  });
}
  DeleteBorrowBook(Bookid: any) {
    this.bookservice.DeleteBorrowBook(Bookid).subscribe((res) => {
      if (res.isOk == true) {
        this.bookservice.GetBorrowBooks().subscribe((res) => {
          this.BorrowData = res.items;
        });
      } else {
        alert('failed');
      }
    });
  }

  AddBooks() {
    this.borrowBook.borrowItems ?? new Array<BorrowItemsDto>();
    this.borrowBook.borrowItems.push(new BorrowItemsDto());
  }

  // BookCopiesDecrement(bookid : any){
  //    this.bookservice.Decrimentcopy(bookid).subscribe(x=>{

  //    })
  // }
  BookCopiesIncrement(bookid : any){
   
    this.bookservice.CopyIncrement(bookid).subscribe(x=>{
    })
 }

  TakeBook() {
    this.bookservice.AddBorrowBook(this.borrowBook).subscribe((res) => {
      if (res.isOk == true) {
        this.getBorrowBooks();
      }if(res.isOk==false){
    
        const dialogRef = this.dialog.open(AlertComponent, {
          data: {
            message:res.message
          },
        });
      }
    });
  }
  removeBook(i) {
    if(this.borrowBook.borrowItems != null && this.borrowBook.borrowItems != undefined && this.borrowBook.borrowItems.length > 0) {
      this.borrowBook.borrowItems.splice(i,1);
    }
  }

  ClosBook(FineData: any) {
    const dialogRef = this.dialog.open(AlertComponent, {
      data: {
        message: 'Close Fine',
        datas: FineData,
        buttonText: {
          cancel: 'Close',
        },
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getBorrowBooks()
      console.log(result)
    });
  }
}
