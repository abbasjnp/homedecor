import { Component, OnInit,Input } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'user-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit {
  @Input() data:any;

  constructor() { }

  ngOnInit() {
   
  }

}



/*-------------------------ng Module----------------*/
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InfoCardComponent],
  exports:[InfoCardComponent]
})
export class InfoCardModule { }
