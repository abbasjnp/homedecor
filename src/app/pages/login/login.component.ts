import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpServiceService } from '../../services/http-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  logIn: FormGroup;
  msgs: any = [];
  emailPattern: any = '[a-zA-z_.0-9]+@[a-zA-Z]+[.][a-zA-Z.]+';
  constructor(public route:Router,public fb:FormBuilder,public httpService:HttpServiceService) { }
  notification(type, summary, detail) {
    this.msgs.push({ severity: type, summary: summary, detail: detail });
  }
  ngOnInit() {
    this.logIn = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required]],
    })
    this.logIn.valueChanges.subscribe((res)=>{
      let Validator=document.getElementsByClassName("error");
      Validator[0].innerHTML="";
      Validator[1].innerHTML="";
    })
  }

  signIn(){
    if(this.logIn.valid){
      console.log(this.logIn.value)
      this.httpService.PostRequestUnauthorised(this.httpService.base+"user/login/",this.logIn.value).subscribe((res)=>{
        this.notification('success', 'Login', 'Sucessfully Login');
        console.log("Login==========   :) ",this)
        let foo=res[0].json.data
        localStorage.setItem('token',foo.access_token);
        localStorage.setItem('decinfo',JSON.stringify(foo));
        setTimeout(() => {
          this.route.navigateByUrl("dashboard")
        }, 500);
      },(error)=>{
        console.log(error)
        this.notification('error', '!Oops Error', error.json().error);
      })
    }else{
      let Validator=document.getElementsByClassName("error");
      if(!this.logIn.controls['email'].valid){
        Validator[0].innerHTML="Enter Valid Email ID"
      }
      if(!this.logIn.controls['password'].valid){
        Validator[1].innerHTML="Enter Valid Password"
      }
    }
  }

//google re captcha v-2.0 
showResponse(response) {
    //call to a backend to verify against recaptcha with private key
    console.log(response,"??????????????????????   google recaptcha response    ???????????????????");
}

}
