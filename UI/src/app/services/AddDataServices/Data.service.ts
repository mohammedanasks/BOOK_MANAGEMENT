import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthorDto } from 'app/dtos/Autors/authorDto';
import { ResponseModel } from 'app/dtos/base/responseModel';
import { CategoryDto } from 'app/dtos/BookCategory/categoryDto';
import { DepartmentDto } from 'app/dtos/Department/departmentDto';
import { IdTextDto } from 'app/dtos/IdTextDto/idTextDto';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private BaseURL = 'https://localhost:7251/api/';

constructor(private http : HttpClient) { }

public AddAuthor(model:AuthorDto): Observable<ResponseModel<AuthorDto>>{
  return this.http.post(this.BaseURL+ 'Data/AddAuthor',model).pipe
  (map((response: ResponseModel<AuthorDto>)=>{
    return response
  }),
  catchError((error) => {
    let res = new ResponseModel<AuthorDto>();
    res.isOk = false;
    res.item = model;
    if (error.error instanceof ErrorEvent) {
      res.message = `Error: ${error.error.message}`;
    } else {
      res.message = `Error: ${error.message}`;
    }
    return of(res);
  })
)}

public AddCategory(model:CategoryDto): Observable<ResponseModel<CategoryDto>>{
  return this.http.post(this.BaseURL+ 'Data/AddCategory',model).pipe
  (map((response: ResponseModel<CategoryDto>)=>{
    return response
  }),
  catchError((error) => {
    let res = new ResponseModel<CategoryDto>();
    res.isOk = false;
    res.item = model;
    if (error.error instanceof ErrorEvent) {
      res.message = `Error: ${error.error.message}`;
    } else {
      res.message = `Error: ${error.message}`;
    }
    return of(res);
  })
  
)}

public AddDepartment(model:DepartmentDto): Observable<ResponseModel<DepartmentDto>>{
  return this.http.post(this.BaseURL+ 'Data/AddDepartment',model).pipe
  (map((response: ResponseModel<DepartmentDto>)=>{
    return response
  }),
  catchError((error) => {
    let res = new ResponseModel<DepartmentDto>();
    res.isOk = false;
    res.item = model;
    if (error.error instanceof ErrorEvent) {
      res.message = `Error: ${error.error.message}`;
    } else {
      res.message = `Error: ${error.message}`;
    }
    return of(res);
  })

  
  
)}



public GetDepartments():Observable<ResponseModel<DepartmentDto>>{
  return this.http.get<ResponseModel<DepartmentDto>>(this.BaseURL+'Data/GetDepartments')
}


}
