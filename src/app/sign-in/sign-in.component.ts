import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyServiceService } from '../my-service.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  show:boolean=false

  constructor(private route:Router, private myservice:MyServiceService) { }

  ngOnInit(): void {

    
  }


  myform=new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('', Validators.required)

  })


  

public onClick():void{
  
  if(this.myform.controls.password.value !=='admin' || this.myform.controls.username.value !=='admin' ){
      this.show=true
      this.myservice.check=false
    
  }else{
    this.myservice.check=true
    this.route.navigate(['/home'])


  }


}


}
