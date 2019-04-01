import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-option-category',
  templateUrl: './option-category.component.html',
  styleUrls: ['./option-category.component.scss']
})
export class OptionCategoryComponent implements OnInit {
  sendData: any;
  constructor(public activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.checkRouting(this.activeRoute.snapshot.paramMap.get('id'))
  }

  checkRouting(info) {
    switch (info) {
      case null:
        this.sendData = { header: 'Category List', id: 1 }
        break;
      case 'addsubcategory':
        this.sendData = { header: 'Add Sub Category', id: 2 }
        break;
      case 'addtexturecategory':
        this.sendData = { header: 'Add Texture Category', id: 3 }
        break;
      case 'addtexture':
        this.sendData = { header: 'Add Texture', id: 4 }
        break;
      default:
      this.sendData = { header: '404 Error', id: 404 }
    }
  }

}
