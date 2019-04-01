import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../../../services/http-service.service';
import { Router } from '@angular/router';
import { CompileShallowModuleMetadata } from '@angular/compiler';
@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.scss']
})
export class UsersDetailsComponent implements OnInit {
  filterSearch:boolean=false;
  userDetails:any;
  totalData:number=10;//to set data in paginator
  searchTerm: String;
  filterQuery:any;
  constructor(public httpService:HttpServiceService,public route:Router) { }

  ngOnInit() {
    this.getUserDetails(1);
  }

  getUserDetails(p){
    this.httpService.GetRequest(this.httpService.base_path+"users/?page="+p).subscribe((res)=>{
      console.log(this.httpService.base_path+"users/?page="+p,"=778855555555555555555555555555");
      this.userDetails=res[0].json.users;
      this.totalData=res[0].json.total
    },(error)=>{
      console.log(error)
    })
  }

  viewRouting(event){
    this.route.navigateByUrl('/users/'+event)
    console.log(event)
  }

  searchWithFilter(event){
    if(event.target.value.length>0){
      this.httpService.GetRequest(this.httpService.base_path+"users/?search="+event.target.value).subscribe((res)=>{
        this.userDetails=res[0].json.users;
        this.totalData=res[0].json.total;

      },(error)=>{
        console.log(error)
      })
    }else{
      this.getUserDetails(1)
    }
  }

  confirmOption()
  { 
    console.log(this.filterQuery);
  
      this.httpService.GetRequest(this.httpService.base_path+"users/?search=&key="+this.filterQuery).subscribe((res)=>{
        this.userDetails=res[0].json.users;
        console.log(this.userDetails+"confirmOption()  ---------");
        
       } ,
       (error)=>{
          console.log(error)
        })
   
    }
  
  paginate(event){
    this.getUserDetails(event.page)
  }

}
