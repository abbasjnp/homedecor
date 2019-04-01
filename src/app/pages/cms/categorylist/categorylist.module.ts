import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategorylistComponent } from './categorylist.component';
import { Routes, RouterModule } from '@angular/router';

import { CardModelsModule } from '../../../cards/card-models/card-models.module';
// import { CardModelsComponent } from '../../../cards/card-models/card-models.component';
import { CmstabelModule } from '../../../cards/cmstabel/cmstabel.module';

import {MatButtonModule} from '@angular/material/button';

const routes: Routes = [
  {
    path:'',
    component:CategorylistComponent    
  }
];

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    CardModelsModule,
    CmstabelModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule, CategorylistComponent],
  declarations: [CategorylistComponent]
})

export class CategorylistModule { }