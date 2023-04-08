import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';
import { MyServiceService } from '../my-service.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  
  public letter:string=''
  public id:number=0
  public data:any
  

  constructor(private myService:MyServiceService, private http:HttpClient, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['detailsId']
   this.receiveData()


  }
  public receiveData(){
    
    this.myService.idData(this.id).subscribe(data=>{
      this.data=data
      this.letter=this.data.name[0]
    })
  }

 

}
