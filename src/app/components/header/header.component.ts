import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() active: any;

  showOption: boolean = false;
  left: string;
  categoryOption: any;
  category = {
    "cms": [
      { cat: "Category List", route: '/cms/categoryList' },
      { cat: "Add Model", route: '/cms/categoryList/p/add-model' },
    ],
    "add": [
      { cat: "Add Category", route: '/add-category' },
      { cat: "Add Sub Category", route: '/add-category/addsubcategory' },
      { cat: "Add Model", route: '/cms/categoryList/p/add-model' },
      { cat: "Add Texture Category", route: '/add-category/addtexturecategory' },
      { cat: "Add Texture", route: '/add-category/addtexture' }
    ],
    "logOut": [
      { cat: "Log out", route: '/login', id: -1 },
    ]

  }
  constructor(public route: Router) { }

  ngOnInit() {
   
  }

  optionWithCategory(event, id) {
    window.addEventListener('scroll', this.scroll, true);
    let a = JSON.stringify(id);
    if (id != 2) {
      this.left = (event.clientX - 200) + "px";
    } else {
      this.left = (event.clientX - 100) + "px";
    }
    switch (id) {
      case 0:
        this.categoryOption = this.category.add;
        break;
      case 1:
        this.categoryOption = this.category.cms;
        break;
      case 2:
        this.categoryOption = this.category.logOut;
        break;
      default:
        break;
    }
    console.log(this.categoryOption)
    this.showOption = true;
  }

  scroll = (): void => {
    this.showOption = false;
    window.removeEventListener('scroll', this.scroll, true);
  };

  heroAction(info, foo) {
    if (info) {
      if (foo.id) {
        localStorage.clear();
        sessionStorage.clear();
        setTimeout(() => {
          this.route.navigateByUrl(foo.route);
        }, 500);
      } else {
        setTimeout(() => {
          this.scroll();
        }, 200);
      }
    } else {
      setTimeout(() => {
        this.scroll();
      }, 200);
    }
  }

}
