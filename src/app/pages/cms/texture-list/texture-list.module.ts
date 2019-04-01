import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextureListComponent } from './texture-list.component';
import { Routes, RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {PaginatorModule} from 'primeng/paginator';
import {MatInputModule} from '@angular/material/input';
import { CmstabelModule } from '../../../cards/cmstabel/cmstabel.module';

const routes: Routes = [
  {
    path:'',
    component:TextureListComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    PaginatorModule,
    CmstabelModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [TextureListComponent]
})

export class TextureListModule { }