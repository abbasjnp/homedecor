import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.scss']
})
export class CategorylistComponent implements OnInit {

  dataFromCmsTable:any [];

  deleteConform:boolean=false;
  constructor() {

                                                                                                                                                                                                                                                                                                                                                                            
   }

  ngOnInit() {
    console.log("In CategoryList Component ");
   
    // this.sendView();
  
  }

  deleteConformOption(info?){
    if(info){
      this.deleteConformByAdmin();
      setTimeout(() => {
        this.deleteConform=false;  
      }, 200);
    }else{
      this.deleteConform=false;
    }
  }
  
  deleteConformByAdmin(){
    console.log("Conform Delete");
  }


  toCat(event: boolean){
    console.log(event, "----------------------JMD--------------------");
    // this.dataFromCmsTable = event;
    console.log(this.dataFromCmsTable,"CMs data");
  }

}
