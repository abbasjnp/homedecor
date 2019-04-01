import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../../services/http-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userDetails: any;

  active_users: any;
  inactive_users: any;
  active_users1: any;
  inactive_users1: any;
 
  user_info: any = [];
  range:any="";
  total_users:any;


  Options:any=[
    {id:'0',name:'Category'},
    {id:'1',name:'Sub Category'}
  ];
  selectedValue:any;




  public lineChartData: any = [
    {
      data: [],
      label: 'Series A',
      "fill": false,
    }
  ];
  public lineChartLabels: Array<any> = [];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'transparent',
      borderColor: '#ef6884',
      pointBackgroundColor: '#ef6884',
      pointBorderColor: 'grey',
      pointHoverBackgroundColor: 'red',
      pointHoverBorderColor: 'green'
    }

  ];

  constructor(public httpService: HttpServiceService, public route: Router) {
    this.selectedValue = document.getElementById("selectedOption");

   }

  ngOnInit() {
    // this.getUserDetails(1);
    this.getCanvas('none');

    
  }


  getCanvas(range) {
    let url = this.httpService.base_path + 'dashboard/?key='+ range;
    this.httpService.GetRequest(url)
      .subscribe(data => {
        console.log(data[0].json, ']]]]]]]]]]]]]]]]]]]');
        this.lineChartLabels = data[0].json.data.order_analysis_list.map((data, index) => {
          return data.category_name;
        })
        this.lineChartData[0].data = data[0].json.data.order_analysis_list.map((data, index) => {
          return data.order_count;
        })

        console.log(this.lineChartLabels, "line---")
        console.log(this.lineChartData, "data---")

        this.active_users = data[0].json.data.active_users;
        this.active_users=this.active_users>1?`${this.active_users} Active Users`:`${this.active_users} Active User`
        this.inactive_users = data[0].json.data.inactive_users;
        this.inactive_users=this.inactive_users>1?`${this.inactive_users} Inactive Users`:`${this.inactive_users} Inactive User`;

        this.active_users1 = data[0].json.data.active_users;
        this.inactive_users1 = data[0].json.data.inactive_users;
        this.userDetails = data[0].json.data.recent_users_list;
        this.total_users = data[0].json.data.total_users;
        this.user_info=[];
        this.user_info.push(
          { 'total_users': data[0].json.data.total_users, "image": "/assets/image/dashboard/0.png", "heading": "Total Users" },
          { 'total_users': data[0].json.data.total_orders, "image": "/assets/image/dashboard/1.png", "heading": "Total Orders" },
          { 'total_users': data[0].json.data.save_screenshots, "image": "/assets/image/dashboard/2.png", "heading": "Saved Screenshots" },
          { "total_users": data[0].json.data.views_models, "image": "/assets/image/dashboard/3.png", "heading": "Viewed Models" })


          console.log(this.user_info, "total user")
      })
  }

  getUserDetails(p) {
    this.httpService.GetRequest(this.httpService.base_path + "users/?page=" + p).subscribe((res) => {
      this.userDetails = res[0].json.users, '========';
    }, (error) => {
      console.log(error)
    })
  }

  viewRouting(event) {
    this.route.navigateByUrl('/users/' + event)
    console.log(event)
  }

  onChangeOption(event){
     console.log(event)
     this.range = event.value;
     this.getCanvas(this.range);
  }

}
