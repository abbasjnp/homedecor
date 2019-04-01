import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../../../services/http-service.service';

@Component({
  selector: 'app-orders-details',
  templateUrl: './orders-details.component.html',
  // styleUrls: ['./orders-details.component.scss'],
  styleUrls: ['../../../cards/cmstabel/cmstabel.component.scss'],
})
export class OrdersDetailsComponent implements OnInit {
  orders: any;
  count: number;
  totalData: any;
  orderDetails: any;
  constructor(public httpService: HttpServiceService) { }

  items: any = [];
  ngOnInit() {
    this.getOrderDetails(1);
    this.items = [
      { label: 'Order Id', command: () => { this.sortBy("id"); } },
      { label: 'User Name', command: () => { this.sortBy("user__name"); } },
      { label: 'Product Name', command: () => { this.sortBy("product__name"); } },
      { label: 'Texture', command: () => { this.sortBy("texture__name"); } }
    ];

 this.httpService.GetRequest(this.httpService.base_path + "get_orders/?page=")
      .subscribe(res => {
        console.log(res[0].json.count,);
      })
  }

  sortBy(str) {

    this.httpService.GetRequest(this.httpService.base_path + "get_orders/?page=1&order_by=" + str)
      .subscribe(res => {
        this.count= res[0].json.count;//to count the no of pages
        this.orders=res[0].json.data;

        console.log(res[0].json.data,"--------------------res.json.data");

      }, (error) => {
        console.log(error)
      })

  }


  getOrderDetails(page) {
    this.httpService.GetRequest(this.httpService.base_path + "get_orders/?page=" + page).subscribe((res) => {
      console.log("getting orders ");
      let resp = res[0].json;
      this.orders = resp.data;
      this.count = resp.count;//to count the no of pages
      console.log(resp, this.orders, this.count)
    }, (error) => {
      console.log(error)
    })
    console.log("orders Entered --")
  }

  onSelect(event) {
    console.log(event, "----")
  }

  searchWithFilter(event) {
    if (event.target.value.length > 0) {
      this.httpService.GetRequest(this.httpService.base_path + "get_orders/?search=" + event.target.value).subscribe((res) => {
        console.log(res);
        this.count= res[0].json.count;//to count the no of pages
        this.orders = res[0].json.data;
        this.orderDetails = res[0].json.data;
        this.totalData = res[0].json.count;
        console.log("searching orders----------------");
      }, (error) => {
        console.log(error)
      })
    } else {
      this.getOrderDetails(1)
    }
  }

  paginate(event) {
    this.getOrderDetails(event.page + 1)
  }

}
