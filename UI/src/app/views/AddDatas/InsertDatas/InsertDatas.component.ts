import { Component, OnInit } from '@angular/core';


import { ActivatedRoute } from '@angular/router';
import { AuthorDto } from 'app/dtos/Autors/authorDto';
import { CategoryDto } from 'app/dtos/BookCategory/categoryDto';
import { DepartmentDto } from 'app/dtos/Department/departmentDto';

import { DataService } from 'app/services/AddDataServices/Data.service';



@Component({
  selector: 'app-InsertDatas',
  templateUrl: './InsertDatas.component.html',
  styleUrls: ['./InsertDatas.component.css']
})
export class InsertDatasComponent implements OnInit {

  author: AuthorDto
  category : CategoryDto
  department  : DepartmentDto


  constructor(private service: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(par => {
     if(par.id != null && par.id != 0 && par.id != undefined) {
       //get item detail from api
       // then bind to model
     }else {
       this.author = new AuthorDto();
       this.category = new CategoryDto();
       this.department = new DepartmentDto();
     }
    })
 
  } 
  Addauthor() {
    this.service.AddAuthor(this.author).subscribe(res => {
      if(res.isOk == true) {
        alert('Ok')
        this.author = new AuthorDto();
      } else {
        alert('failed')
      }
    })
  }

  AddCategory() {
    this.service.AddCategory(this.category).subscribe(res => {
      if(res.isOk == true) {
        alert('Ok')
        this.category = new CategoryDto();
      } else {
        alert('failed')
      }
    })
  }

  AddDepartment() {
    this.service.AddDepartment(this.department).subscribe(res => {
      if(res.isOk == true) {
        alert('Ok')
        this.department = new DepartmentDto();
      } else {
        alert('failed')
      }
    })
  }

 
  
  

}


 
 

  



