import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmstabelComponent } from './cmstabel.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
// import {CategorylistModule } from '../../pages/cms/categorylist/categorylist.module';
// import { CategorylistComponent  } from '../../pages/cms/categorylist/categorylist.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [CmstabelComponent],
  exports:[CmstabelComponent]
})
export class CmstabelModule { }
