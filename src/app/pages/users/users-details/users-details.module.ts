import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersDetailsComponent } from './users-details.component';
import { Routes, RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {PaginatorModule} from 'primeng/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { RecentlyuserModule } from '../../../cards/recentlyuser/recentlyuser.component';
import {FormsModule, ReactiveFormsModule  } from '@angular/forms'

const routes: Routes = [
  {
    path:'',
    component:UsersDetailsComponent
  }
];

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatButtonModule,
    MatIconModule,
    PaginatorModule,
    MatInputModule,
    MatRadioModule,
    RecentlyuserModule,
    RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [UsersDetailsComponent]
})

export class UsersDetailsModule { }