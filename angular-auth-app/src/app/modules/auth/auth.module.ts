import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninPageComponent } from './signin-page/signin-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ComponentsModule } from 'src/app/components/components.module';
import { AuthService } from './auth.service';

const routes: Routes = [
    { path: 'signin', component: SigninPageComponent },
    { path: 'signup', component: SignupPageComponent },
];

@NgModule({
    declarations: [SigninPageComponent, SignupPageComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule, FlexLayoutModule, ComponentsModule],
})
export class AuthModule {}
