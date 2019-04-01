import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListsComponent } from './category-lists.component';
import { Routes, RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {PaginatorModule} from 'primeng/paginator';
import {MatInputModule} from '@angular/material/input';
import { CmstabelModule } from '../../../cards/cmstabel/cmstabel.module';



const routes: Routes = [
  {
    path:'',component:CategoryListsComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    CmstabelModule,
    PaginatorModule,
    RouterModule.forChild(routes)
  ],
    exports: [RouterModule],
    declarations: [CategoryListsComponent]
})
export class CategoryListsModule { }
