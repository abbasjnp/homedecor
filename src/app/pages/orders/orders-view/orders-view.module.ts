import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersViewComponent } from './orders-view.component';
import { Routes, RouterModule } from '@angular/router';
// import {MatButtonModule} from '@angular/material/button';
// import {MatIconModule} from '@angular/material/icon';
// import {MatInputModule} from '@angular/material/input';
// import {PaginatorModule} from 'primeng/paginator';
import { ViewProductModule } from '../../../cards/view-product/view-product.component';

const routes: Routes = [
  {
    path:'',
    component:OrdersViewComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    ViewProductModule,
    // MatIconModule,
    // MatInputModule,
    // PaginatorModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [OrdersViewComponent]
})

export class OrdersViewModule { }