import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { Users } from '../interfaces/users.interface';
import { tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public posts:Users[]=[]
  public selectPost: any;
  public xPos: number=0;
  public yPos: number=0;
  

  constructor(private myService:MyServiceService,private route:Router) { }

  ngOnInit(): void {

    this.myService.getList().pipe(
      tap(response =>this.posts=response)
    ).subscribe()

    
  }

  showButtons(post: any, event: MouseEvent) {
  
    this.selectPost = post;
    this.xPos = event.clientX;
    this.yPos = event.clientY;
  }

  showDetails(){
    this.myService.checkfordetail=true
     this.route.navigate(['/home', this.selectPost.id])
     
    
    
  }
  deletePost(){
    
    let index= this.posts.indexOf(this.selectPost)
    if(index>=0){
      this.posts.splice(index,1)
      
    }

    
  }

}
