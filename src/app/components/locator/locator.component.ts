import { NgModule, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { element } from 'protractor';
import { Location } from '@angular/common';
import {BreadcrumbModule} from 'primeng/breadcrumb';

// I also import Router so that I can subscribe to events
import { Router } from '@angular/router';
//import { HttpClient } from 'selenium-webdriver/http';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-locator',
  templateUrl: './locator.component.html',
  styleUrls: ['./locator.component.scss']
})
export class LocatorComponent implements OnInit {

//elements =[{ name:`Dashboard ${this.router.url=='/dahsboard' ? '':this.router.url}`, path:this.router.url} ];
elements = [ { nameDash:'Dashboard /', name:this.routingBreadCrumb(), path:this.router.url } ];
//elements = [{ name: `Dashboard ${this.router.url == '/dashboard' ? '' : this.router.url}`, path: this.router.url }];  // `Dashboard ${this.router.url == '/dashboard'?'':this.router.url}`


  constructor(private router: Router, location: Location, private header: HttpClient) {
    //console.log(window.location.hostname());
    //console.log(location.path(),"------   location.path()  -------");
    //console.log(win.location.host,"=============   window.location.host   ================");
    console.log(header,"http client module");
  }

  ngOnInit() {
  }

  routingBreadCrumb()
  {
 
    if(this.router.url === '/dashboard'){
      return ` ` ;
    }
    else if(this.router.url === '/users'){
      return ' Users';
    }
    else if(this.router.url === '/orders'){
      return ' Orders';
    }
    else if(this.router.url === '/add-category'){
      return ' Add Category';
    }
    else if(this.router.url === '/add-category/addsubcategory'){
      return ' Add Category';
    }
    else if(this.router.url === '/cms/categoryList')
    {
      return ' CMS';
    }
    
    else if(this.router.url === '/add-category/addtexture'){
      return ' Add Category';
    }
    else if(this.router.url === '/add-category/addtexturecategory'){
      return ' Add Category ';
    }
    else if(this.router.url === '/cms/categoryList'){
      return ' CMS';
    }
    else if(this.router.url === '/cms/categoryList/p/add-model')
    {
      return ' Category List';
    }
    else{
      return ` `;
    }

  }
  
  

}




@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BreadcrumbModule,
    HttpModule,
    HttpClientModule
  ],
  declarations: [LocatorComponent],
  exports: [LocatorComponent]
})
export class LocatorModule { }
