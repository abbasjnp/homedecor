import { Component,OnInit } from '@angular/core';
import { HttpServiceService } from './services/http-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})




export class AppComponent implements OnInit {
  constructor(public httpservice:HttpServiceService){
    
  }

  ngOnInit(){
    
  }
}
