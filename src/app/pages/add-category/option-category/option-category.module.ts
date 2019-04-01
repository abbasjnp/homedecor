import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionCategoryComponent } from './option-category.component';
import { Routes, RouterModule } from '@angular/router';
import { AddCategoryModule } from '../../../cards/add-category/add-category.module';

const routes: Routes = [
  {
    path:'',
    component:OptionCategoryComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    AddCategoryModule,
    RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [OptionCategoryComponent]
})
export class OptionCategoryModule { }