import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseModel } from 'app/dtos/base/responseModel';
import { BorrowBooksDto } from 'app/dtos/BorrowBook/borrowBooksDto';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private subject= new Subject<any>();

  sendclickevent(){
    this.subject.next()
  }
  gelclickevent():Observable<any>{
    return this.subject.asObservable();
  }

}
