import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderModule } from '../../components/header/header.module';
import { LocatorModule } from '../../components/locator/locator.component';

const routes: Routes = [
  {
    path: '',
    component: OrdersComponent,
    children: [
      { path: '', loadChildren: './orders-details/orders-details.module#OrdersDetailsModule'},
      { path: ':id', loadChildren: './orders-view/orders-view.module#OrdersViewModule'},
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    LocatorModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [OrdersComponent]
})

export class OrdersModule { }