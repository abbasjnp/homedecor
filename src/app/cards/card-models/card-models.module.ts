import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModelsComponent } from './card-models.component';
import { CmstabelModule } from '../cmstabel/cmstabel.module';


@NgModule({
  imports: [ CommonModule,CmstabelModule ],
  exports:[ CardModelsComponent ],
  declarations: [ CardModelsComponent ]
})

export class CardModelsModule implements OnInit{

  ngOnInit(){}
 }
