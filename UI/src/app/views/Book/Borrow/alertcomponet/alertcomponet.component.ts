import { Component, Inject, Injectable, OnInit,Output,EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { BorrowBooksDto } from 'app/dtos/BorrowBook/borrowBooksDto';
import { FineDto } from 'app/dtos/fine/fineDto';
import { StudentDto } from 'app/dtos/Student/studentDto';

import { BookService } from 'app/services/Book/Book.service';
import { SharedService } from 'app/services/shared servicess/shared.service';
import { StudentService } from 'app/services/Student/Student.service';
import { BorrowBookComponent } from '../BorrowBook.component';


@Component({
  selector: 'app-alertcomponet',
  templateUrl: './alertcomponet.component.html',
  styleUrls: ['./alertcomponet.component.css']
})
export class AlertComponent implements OnInit {

  
  message: string;
  outofstock:string;
  cancelButtonText = "Cancel";
  finedata : BorrowBooksDto=new BorrowBooksDto();

  SaveFineData: FineDto;
  students:StudentDto[]

  // @Output() event = new EventEmitter<string>()

  constructor(private shredservice:SharedService, 
    private bookservice : BookService,private studentservice : StudentService,  
    private dialog: MatDialog,  private route: ActivatedRoute,
   
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<AlertComponent>) {
     debugger
    if(data.message=="Oops..Out Of Stock"){
       this.message = data.message
       
    }   
    if(data.message=="Your Limit Reached ! Max limit is 3"){
       this.message = data.message 
    }    
  
    if(data.message=="Close Fine"){

      Object.assign(this.finedata=data.datas) 
      if (data.buttonText) {
        this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
      }
    }
    this.dialogRef.updateSize('300vw','300vw')
  }

  ngOnInit():void {
    this.route.params.subscribe((par) => {
      if (par.id != null && par.id != 0 && par.id != undefined) {
        //get item detail from api
        // then bind to model
      } else {
         this.SaveFineData = new FineDto();
      }
    });


    this.studentservice.GetStudents().subscribe(x=>{
    this.students=x.items;
    console.log(this.students)
    })

  }
  onConfirmClick(): void {
    this.dialogRef.close(true);
  }
  savefine(){
    this.bookservice.AddFine(this.SaveFineData).subscribe(res=>{
      if(res.isOk==true){
        alert("fine saved")
      }
    })
  }

  CopyIncriment(bookid : any){
    this.bookservice.CopyIncrement(bookid).subscribe(x=>{})
  }

  DeleteBorrowBook(id : any){
    this.bookservice.DeleteBorrowBook(id).subscribe(res=>
     {
      if(res.isOk==true){
        alert("Fine closed && Book Returned")
        // this.shredservice.sendclickevent()
      }
     } )
  }

}
