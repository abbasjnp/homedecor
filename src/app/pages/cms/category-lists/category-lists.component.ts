import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServiceService } from '../../../services/http-service.service';
import { consumeBinding } from '@angular/core/src/render3/instructions';
@Component({
  selector: 'app-category-lists',
  templateUrl: './category-lists.component.html',
  styleUrls: ['./category-lists.component.scss']
})
export class CategoryListsComponent implements OnInit {
  data: any;
  page:number=10;
  constructor(public route: Router, public httpService: HttpServiceService) { }

  ngOnInit() {
    this.getCategoryList();
  }

  OutputRouting(event) {
    this.route.navigateByUrl("cms/categoryList/models")
  }

  deleteConformByAdmin(event) {
    let indx = -1
    for (let f = 0; f < this.data.length; f++) {
      if (event == this.data[f].product_id) {
        indx = f
      }
    }

    this.httpService.DeleteRequest(`${this.httpService.base_path}product/${event}/`).subscribe((res) => {
      this.data.splice(indx, 1)
      console.log(res, "--delete")
    }, (error) => {
      console.log(error)
    })
  }

  getCategoryList() {
    this.httpService.GetRequest(`${this.httpService.base_path}product/`).subscribe((res) => {
      let resp = res[0].json
      this.data = resp.product_list;
      console.log("data",this.data);
      this.page=resp.total;
    }, (error) => {
      console.log(error)
    })
  }

  searchSomthing(event) {
    this.httpService.GetRequest(`${this.httpService.base_path}product/?search=${event.target.value}`).subscribe((res) => {
      let resp = res[0].json
      this.data = resp.product_list;
      this.page=resp.total;
      console.log(res);
    }, (error) => {
      console.log(error)
    })
  }

}
