import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-texture-list',
  templateUrl: './texture-list.component.html',
  styleUrls: ['./texture-list.component.scss']
})
export class TextureListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  OutputRouting($event){
    console.log($event)
  }
  
  deleteConformByAdmin($event){
    console.log("Conform Delete",$event);
  }

}
