import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { partyDto } from 'app/dtos/party/partyDto';
import { ResponseModel } from 'app/dtos/party/responseModel';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PartyService {
  private BaseURL = 'https://localhost:7043/';

  constructor(private http : HttpClient){}
  
  public AddParties(partie :partyDto): Observable<ResponseModel<partyDto>>{

    return this.http.post(this.BaseURL+ 'api/Partie/AddPartiess',partie).pipe
    (map((response:ResponseModel<partyDto>)=>{
      return response
    }),
    catchError((error) => {
      let res = new ResponseModel<partyDto>();
      res.isOk = false;
      res.item = partie;
      if (error.error instanceof ErrorEvent) {
        res.message = `Error: ${error.error.message}`;
      } else {
        res.message = `Error: ${error.message}`;
      }
      return of(res);
    
    })
  )
}
public GetParites():Observable<ResponseModel<partyDto>>{
  return this.http.get<ResponseModel<partyDto>>(this.BaseURL+'api/Partie/GetParties')
}

}

