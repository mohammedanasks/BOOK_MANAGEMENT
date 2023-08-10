import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseModel } from 'app/dtos/base/responseModel';
import { StudentDto } from 'app/dtos/Student/studentDto';

import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class  StudentService {

  private BaseURL = 'https://localhost:7251/api/';

constructor(private http : HttpClient) { }

public AddStudent(model:StudentDto): Observable<ResponseModel<StudentDto>>{
  return this.http.post(this.BaseURL+ 'Student/AddStudent',model).pipe
  (map((response: ResponseModel<StudentDto>)=>{
    return response
  }),
  catchError((error) => {
    let res = new ResponseModel<StudentDto>();
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


 public DeleteStudent(StudentId:number|string):Observable<ResponseModel<StudentDto>>{
  return this.http.delete<ResponseModel<StudentDto>>(this.BaseURL + `Student/${StudentId}`);
}

public GetStudents():Observable<ResponseModel<StudentDto>>{
  return this.http.get<ResponseModel<StudentDto>>(this.BaseURL+'Student/GetStudents')
}

UpdateStudent(StudentModel: StudentDto):Observable<ResponseModel<StudentDto>>{
  return this.http.put(this.BaseURL+`Student/UpdateStudent`, StudentModel);
}

GetSingleStudent(StudentId:number|string):Observable<ResponseModel<StudentDto>>{
  return this.http.get<ResponseModel<StudentDto>>(this.BaseURL+`Student/${StudentId}`);
}


}
