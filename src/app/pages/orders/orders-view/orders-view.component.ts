import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpServiceService } from '../../../services/http-service.service'
@Component({
  selector: 'app-orders-view',
  templateUrl: './orders-view.component.html',
  styleUrls: ['./orders-view.component.scss']
})
export class OrdersViewComponent implements OnInit {
  data={dfd:'fg'}
  userInfo:any;
  constructor(public httpService:HttpServiceService,public activeRoute:ActivatedRoute) { }

  ngOnInit() {
    this.userInfo = this.activeRoute.snapshot.params;
    console.log(this.userInfo,"-=")
    this.getOrderView();

  }

  getOrderView(){
    this.httpService.GetRequest(`${this.httpService.base_path}user_order/${this.userInfo.id}/`).subscribe((res)=>{
      let resp=res[0].json;
      this.data=resp.data;
    },(error)=>{
      console.log(error)
    })
  }

}
