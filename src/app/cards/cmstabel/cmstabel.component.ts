import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { HttpServiceService } from '../../services/http-service.service';
import { setContextDirty } from '@angular/core/src/render3/styling';
@Component({
  selector: 'cms-tabel',
  templateUrl: './cmstabel.component.html',
  styleUrls: ['./cmstabel.component.scss']
})
export class CmstabelComponent implements OnInit {
  deleteConform:boolean=false;
  @Output() delete: EventEmitter<any> = new EventEmitter();
  @Output() route = new EventEmitter();
  @Input() data:any [];


  // dataTo:any=[];
  dataToClick:boolean = false;
  globalVarToSend:any;
  
  proId:number=-1;

  moreThen:boolean = false;
  lessThen:boolean = false;

  sendToCategoryList:boolean =false;
  sendFromCms:any;

  constructor(public httpService:HttpServiceService) { }

  ngOnInit() {
    // console.log('cms data',this.data)
    // console.log(this.data[0].image.length);
    // this.dataTo = this.data;
    // console.log("Data From Cms", this.dataTo);
  }

  viewProduct(foo){
    this.route.emit(false);    
    this.globalVarToSend = foo;

    // this.toCat();
    console.log(foo,"Data send from CMS table");
  }

  toCat(){
    this.route.emit(this.globalVarToSend);    
    console.log(this.globalVarToSend,"data se nd successfully");
  }

  deletePro(id){
    this.proId=id;
    this.deleteConform=true
  }

  deleteConformOption(info?){
    if(info){
      this.delete.emit(this.proId);
      setTimeout(() => {
        this.deleteConform=false;
      }, 200);
    }else{
      this.deleteConform=false;
    }
  }
}
