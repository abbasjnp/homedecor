import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpServiceService } from '../../../services/http-service.service';
@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.scss']
})
export class OrderViewComponent implements OnInit {
  data: any;
  userInfo: any;
  constructor(private route: ActivatedRoute, public httpService: HttpServiceService) { }

  ngOnInit() {
    this.userInfo = this.route.snapshot.params;
    console.log(this.userInfo)
    if(this.userInfo.route=='order-view'){
      this.getHistoryView();
    }else if(this.userInfo.route=='order-product'){
      this.getOrderProduct();
    }
    else if(this.userInfo.route=='screenshot'){
       this.getScreenshot();
    }
  }

  getHistoryView() {
    this.httpService.GetRequest(`${this.httpService.base_path}user_history/${this.userInfo.id}/`).subscribe((res) => {
      let responce = res[0].json.data;
      this.data = responce;
    }, (error) => {
      console.log(error)
    })
  }

  getOrderProduct(){
    this.httpService.GetRequest(`${this.httpService.base_path}user_order/${this.userInfo.id}/`).subscribe((res) => {
      let responce = res[0].json.data;
      this.data = responce;
    }, (error) => {
      console.log(error)
    })
  }

  getScreenshot(){
    this.httpService.GetRequest(`${this.httpService.base_path}user_screenshot/${this.userInfo.id}/`).subscribe((res) => {
      let responce = res[0].json.data;
      this.data = responce;
    }, (error) => {
      console.log(error)
    })
  }

}
