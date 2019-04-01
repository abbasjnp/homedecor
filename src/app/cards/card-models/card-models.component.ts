import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'card-models',
  templateUrl: './card-models.component.html',
  styleUrls: ['./card-models.component.scss']
})
export class CardModelsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toSend(event){
    console.log(event,"event fired__________");
  }
}
