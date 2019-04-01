import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderModule } from '../../components/header/header.module';
import { LocatorModule } from '../../components/locator/locator.component';

const routes: Routes = [
  {
    path:'',
    component:UsersComponent,
    children: [
      {path: '', loadChildren: './users-details/users-details.module#UsersDetailsModule'},
      {path: ':id', loadChildren: './user/user.module#UserModule', data: { state: 'users' }},
      {path: ':route/:id', loadChildren: './order-view/order-view.module#OrderViewModule', data: { state: 'order-view' }},
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
    declarations: [UsersComponent]
})

export class UsersModule { }