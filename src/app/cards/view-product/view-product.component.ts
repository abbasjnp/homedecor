import { Component, OnInit,Input } from '@angular/core';
import { HttpServiceService } from '../../services/http-service.service';
@Component({
  selector: 'orders-view',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {
  @Input() data:any;
  @Input() routingPage:any;
  constructor(public httpService:HttpServiceService) { 
    // console.log(this.httpService.base_path_img+this.data.image,"===============image hit hit============");
    console.log(this.httpService.base_path_img +"/api/user_order/41/","------44");

    console.log(this.data,"#####################JMD######################");
  }
  ngOnInit() {
    console.log(this.data,"view data--",this.routingPage)
    // console.log(this.httpService.base_path_img+this.data.image,"===============image hit hit============");
  }

}


/*--------------------Ng Module----------------*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [ViewProductComponent],
  exports: [ViewProductComponent]
})
export class ViewProductModule { }
