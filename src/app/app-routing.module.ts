import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { MyguardGuard } from './guards/myguard.guard';
import { HomeguardGuard } from './guards/homeguard.guard';

const routes: Routes = [
  {path:'', redirectTo:'signin', pathMatch:'full'
 },
 {
  path:'signin', component:SignInComponent
},
 {
  path:'home', component:HomeComponent, canActivate:[MyguardGuard]
 },
 {
  path:'home/:detailsId', component:DetailsComponent, canActivate:[HomeguardGuard]
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
