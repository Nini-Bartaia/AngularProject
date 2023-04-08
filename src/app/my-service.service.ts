import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Users } from './interfaces/users.interface';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  
  public baseUrl='https://jsonplaceholder.typicode.com'
  public check:boolean=false
  public checkfordetail:boolean=false


  constructor(private http:HttpClient) { }

  public getList():Observable<Users[]>{
    return this.http.get<Users[]>(this.baseUrl+'/users')


  }


  public idData(id:number){
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+ id)
  }

  


}
