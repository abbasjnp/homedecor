import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderViewComponent } from './order-view.component';
import { Routes, RouterModule } from '@angular/router';
import { ViewProductModule } from '../../../cards/view-product/view-product.component';

const routes: Routes = [
  {
    path:'',
    component:OrderViewComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    ViewProductModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [OrderViewComponent]
})
export class OrderViewModule { }