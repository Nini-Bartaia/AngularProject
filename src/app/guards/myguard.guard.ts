import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MyServiceService } from '../my-service.service';

@Injectable({
  providedIn: 'root'
})
export class MyguardGuard implements CanActivate {

  constructor(private myservice:MyServiceService, private route:Router){}
  canActivate() {

    if(this.myservice.check){
    
      return true;

    }else{
      this.route.navigate(['signin'])

      return false
    }
    
   
  }

  
  
}
