import {Component, Input, OnInit} from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { DepartmentDto } from 'app/dtos/Department/departmentDto';
import { StudentDto } from 'app/dtos/Student/studentDto';
import { DataService } from 'app/services/AddDataServices/Data.service';
import { StudentService } from 'app/services/Student/Student.service';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-Student',
  templateUrl: './Student.component.html',
  styleUrls: ['./Student.component.css']
})
export class StudentComponent implements OnInit {

  displayedColumns: string[] = ['Id','Name','Department','Actions'];
  dataSource :any;
  
  emailFormControl = new FormControl('', [Validators.required, Validators.minLength(3)]);
  matcher = new MyErrorStateMatcher();


  student:StudentDto
  department :  DepartmentDto[]
 

  constructor(private service : StudentService,private DataService : DataService, private route: ActivatedRoute) { }
  
  ngOnInit() { 

    this.  GetStudent()
    this.route.params.subscribe(par => {
      if(par.id != null && par.id != 0 && par.id != undefined) {
        //get item detail from api
        // then bind to model
      }else {
        this.student = new StudentDto;
   
      }
     })

     this.DataService.GetDepartments().subscribe(data=>{
      
      this.department=data.items
   
     })

  }

  AddStudent(){
    debugger
    this.service.AddStudent(this.student).subscribe(res=>{
      if(res.isOk==true){
        this.student = new StudentDto;
        this.GetStudent()
      }
      else{
        alert('fail')
      }
    
    })
  }
  StudentData: StudentDto[];
  GetStudent(){
    this.service.GetStudents().subscribe(res=>{

      if(res.isOk==true){
        this.StudentData=res.items
        this.dataSource= new MatTableDataSource(this.StudentData)
      }else{
        alert('fail')
      }
    })
  }

  DeleteStudent(data : any){
    this.service.DeleteStudent(data.id).subscribe(res=>{
      
      if(res.isOk==true){
        this.GetStudent()
      }else{
        alert('fail')
      }
    })
  }

}
