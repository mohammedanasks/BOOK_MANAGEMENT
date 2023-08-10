import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StudentDto } from 'app/dtos/Student/studentDto';
import { DataService } from 'app/services/AddDataServices/Data.service';
import { StudentService } from 'app/services/Student/Student.service';



@Component({
  selector: 'app-EditStudent',
  templateUrl: './EditStudent.component.html',
  styleUrls: ['./EditStudent.component.css']
})
export class EditStudentComponent implements OnInit {
  
  student:StudentDto


  EditStudent = new FormGroup({
    studentName: new FormControl(''),
    departmentName: new FormControl('')
  })

  constructor(private service : StudentService,private DataService : DataService,
    private route: ActivatedRoute) { }

  ngOnInit() {
  console.log(this.route.snapshot.params.id)
    this.service.GetSingleStudent(this.route.snapshot.params.id).subscribe(x=>{
      this.student=x.item
    })
  
  }



  UpdateStudent(){
    debugger
    this.service.UpdateStudent(this.student).subscribe(res=>{
      if(res.isOk==true){
        alert('stdent updated');
        this.student = new StudentDto;
        res.items.forEach(x=>{
        })
      }else{
        alert("updation faild");
      }
    })
  }
}
