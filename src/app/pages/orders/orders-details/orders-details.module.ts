import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersDetailsComponent } from './orders-details.component';
import { Routes, RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {PaginatorModule} from 'primeng/paginator';
import {SplitButtonModule} from 'primeng/splitbutton';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';



const routes: Routes = [
  {
    path:'',
    component:OrdersDetailsComponent
  }
];

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SplitButtonModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    PaginatorModule,
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [OrdersDetailsComponent]
})

export class OrdersDetailsModule { }