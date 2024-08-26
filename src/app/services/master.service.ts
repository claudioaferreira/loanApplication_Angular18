import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponseMOdel, Application } from '../model/application.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }

  addNewApplication(obj : Application) : Observable<ApiResponseMOdel>{
    return this.http.post<ApiResponseMOdel>('https://projectapi.gerasim.in/api/Loan/AddNewApplication', obj);
  }
}
