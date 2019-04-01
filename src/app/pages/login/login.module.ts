import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {GrowlModule} from 'primeng/growl';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GrowlModule,
    RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [LoginComponent]
})

export class LoginModule { }