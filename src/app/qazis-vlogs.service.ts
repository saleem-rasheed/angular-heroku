import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';
import { User } from 'src/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QazisVlogsService {

  constructor(private http: HttpClient) { }
  headers = new HttpHeaders({ "Content-Type": "application/json" });
  URL = "http://localhost:8080";

  onFormSubmit(user:User):Observable<any>{
    console.log(user.email+","+user.name+","+user.message+","+user.phone);
    this.healthCheck();
   return this.http.post(this.URL+"/user/message", JSON.stringify(user), {headers: this.headers});
  }
  healthCheck():Observable<any>{
    return this.http.get(this.URL+"/health/check");   
  }
}
