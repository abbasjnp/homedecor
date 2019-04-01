import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { HttpServiceService } from '../../services/http-service.service';
import {GrowlModule} from 'primeng/growl';
@Component({
  selector: 'recently-user',
  templateUrl: './recentlyuser.component.html',
  styleUrls: ['./recentlyuser.component.scss']
})
export class RecentlyuserComponent implements OnInit {
  deleteConform:boolean=false;
  userId:number=0;
  indx:number=-1;
  @Output()route=new EventEmitter();
  msgs: any = [];
  @Input() data: any;

  constructor(public httpService:HttpServiceService) { }

  ngOnInit() {
    console.log(this.data,"=-=-hero-")
  }

  deleteCall(indx,userid){
    this.deleteConform=true;
    this.userId=userid;
    this.indx=indx;
  }

  deleteConformOption(info?){
    if(info){
      this.httpService.DeleteRequest(this.httpService.base_path+"users/"+this.userId+"/").subscribe((res)=>{
        console.log(res)
        this.data.splice(this.indx,1)
        this.notification('success', 'Successfully', 'User removed successfully ');
      },(error)=>{
        console.log(error)
        this.notification('error', '!Oops Error', 'Something went wrong try again.');
      })
    }
    setTimeout(() => {
      this.deleteConform=false;
    }, 200);
  }

  activeDactiveUser(indx,userid,active){
    console.log(indx,userid,active,"++++++++++++++++++++++")
    this.httpService.PutRequest(this.httpService.base_path+"users/"+userid+"/?value="+!active,"").subscribe((res)=>{
      console.log(this.data[indx],"=-=-=")
      this.data[indx].is_active=!active;
      let info=active?'Deactivated':'Activated';
      this.notification('success', 'Successfully', "User "+info+" Successfully");
    },(error)=>{
      console.log(error)
      this.notification('error', '!Oops Error', 'Something went wrong try again.');
    })
  }

  userView(user_id){
    this.route.emit(user_id);
  }

  notification(type, summary, detail) {
    this.msgs = [];
    this.msgs.push({ severity: type, summary: summary, detail: detail });
  }

}



/*-------------Ng Module-----------*/
@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    GrowlModule,
  ],
  declarations: [RecentlyuserComponent],
  exports:[RecentlyuserComponent]
})
export class RecentlyuserModule { }
