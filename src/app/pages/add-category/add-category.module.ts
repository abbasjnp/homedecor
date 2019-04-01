import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCategoryComponent } from './add-category.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderModule } from '../../components/header/header.module';
import { LocatorModule } from '../../components/locator/locator.component';

const routes: Routes = [
  {
    path:'',
    component:AddCategoryComponent,
    children: [
      {path: '', loadChildren:"./option-category/option-category.module#OptionCategoryModule"},
      {path: ':id', loadChildren:"./option-category/option-category.module#OptionCategoryModule"},
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
  declarations: [AddCategoryComponent]
})

export class AddCategoryModule { }