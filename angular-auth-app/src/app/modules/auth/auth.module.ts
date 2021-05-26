import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninPageComponent } from './signin-page/signin-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';



@NgModule({
  declarations: [SigninPageComponent, SignupPageComponent],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
