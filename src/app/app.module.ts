import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import {HttpClientModule} from '@angular/common/http'
import { MyguardGuard } from './guards/myguard.guard';
import { HomeguardGuard } from './guards/homeguard.guard';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [MyguardGuard, HomeguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
