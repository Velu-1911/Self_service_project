import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) { }

  getUserdata(username: string,password: string){
    return this.http.get('http://localhost:8072/user/'+username+'/'+password);
    //this username and password which is in + symbol will set the username and password from the server side tomcat and perform validation.
  }
}