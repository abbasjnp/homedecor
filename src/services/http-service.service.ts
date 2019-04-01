import { Injectable } from "@angular/core";
import {Router} from '@angular/router'
import {
  Http,
  Response,
  RequestOptions,
  Headers,
  Request,
  RequestMethod
} from "@angular/http";
import { Observable, Subject } from "rxjs/Rx";

import "rxjs/Rx";
import "rxjs/add/operator/map";
import * as Rx from "rxjs/Rx";

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  progress:boolean=false;
  //======== base path ========//
  
  public base_path: string;
  public base_path_img: string;
  public base: string;
  //======== API ========//
  public headers: Headers;
  public requestoptions: RequestOptions;
  public res: Response;
  public serverError: boolean;

  constructor(public http: Http,public router:Router) {
    
    this.base_path = 'https://homedesign.sia.co.in/api/';
    this.base_path_img = 'https://homedesign.sia.co.in';
    this.base = 'https://homedesign.sia.co.in/';
  }

  public getRequsetOptions(url: string): RequestOptions {
    if (localStorage.getItem("token")) {
      this.headers = new Headers();
      this.headers.append("Content-Type", "application/json");
      // this.headers.append("Authorization", localStorage.getItem("token"));
      this.headers.append("Authorization", 'Bearer ' +  localStorage.getItem('token'));
    }

    this.requestoptions = new RequestOptions({
      method: RequestMethod.Get,
      url: url,
      headers: this.headers
    });

    return this.requestoptions;
  }

  public getRequsetOptionsUnauthorised(url: string): RequestOptions {
    this.headers = new Headers();
    this.headers.append("Content-Type", "application/json");

    this.requestoptions = new RequestOptions({
      method: RequestMethod.Get,
      url: url,
      headers: this.headers
    });

    return this.requestoptions;
  }

  public GetRequest(url: string): any {
    this.progressOff(true);/*--progress bar stop--*/
    return this.http
      .request(new Request(this.getRequsetOptions(url)))
      .map((res: Response) => {
       
        let jsonObj: any;
        if (res.status === 204) {
          jsonObj = null;
        } else if (res.status === 500) {
          jsonObj = null;
        }
      
         else if (res.status !== 204) {
          jsonObj = res.json();
        }
        this.progressOff(false);/*--progress bar stop--*/
        return [{ status: res.status, json: jsonObj }];
      })
      .catch(error => {
        this.progressOff(false);/*--progress bar stop--*/
        if (error.status === 0) {
          return Observable.throw(error);
        }
        else if(error.status === 401){
          localStorage.clear();
          this.router.navigateByUrl('/login')
        }
        else {
          this.serverError = true;
          return Observable.throw(error);
        }
       
      });
  }

  public GetRequestUnauthorised(url: string): any {
    return this.http
      .request(new Request(this.getRequsetOptionsUnauthorised(url)))
      .map((res: Response) => {
        let jsonObj: any;
        if (res.status === 204) {
          jsonObj = null;
        } else if (res.status === 500) {
          jsonObj = null;
        } else if (res.status !== 204) {
          jsonObj = res.json();
        }
        return [{ status: res.status, json: jsonObj }];
      })
      .catch(error => {
        return Observable.throw(error);
      });
  }

  public PostRequest(url: string, data: any): any {
    this.progressOff(true);/*--progress bar stop--*/
    this.headers = new Headers();
    this.headers.append("Content-Type", "application/json");
    // this.headers.append("Authorization", localStorage.getItem("token"));
    this.headers.append("Authorization", 'Bearer ' +  localStorage.getItem('token'));

    this.requestoptions = new RequestOptions({
      method: RequestMethod.Post,
      url: url,
      headers: this.headers,
      body: JSON.stringify(data)
    });

    return this.http
      .request(new Request(this.requestoptions))
      .map((res: Response) => {
        this.progressOff(false);/*--progress bar stop--*/
        if (res) {
          return [{ status: res.status, json: res.json() }];
        }
      })
      .catch(error => {
        this.progressOff(false);/*--progress bar stop--*/
        return Observable.throw(error);
      });
  }

  public PostRequestUnauthorised(url: string, data: any): any {
    this.progressOff(true);/*--progress bar stop--*/
    this.headers = new Headers();
    this.headers.append("Content-Type", "application/json");

    this.requestoptions = new RequestOptions({
      method: RequestMethod.Post,
      url: url,
      headers: this.headers,
      body: JSON.stringify(data)
    });

    return this.http
      .request(new Request(this.requestoptions))
      .map((res: Response) => {
        if (res) {
          this.progressOff(false);/*--progress bar stop--*/
          return [{ status: res.status, json: res.json() }];
        }
      })
      .catch((error: any) => {
        this.progressOff(false);/*--progress bar stop--*/
        return Observable.throw(error);
      });
  }

  public DeleteRequest(url: string): any {
    this.progressOff(true);/*--progress bar stop--*/
    this.headers = new Headers();
    this.headers.append("Content-Type", "application/json");
    // this.headers.append("Authorization", localStorage.getItem("token"));
    this.headers.append("Authorization", 'Bearer ' +  localStorage.getItem('token'));
    this.requestoptions = new RequestOptions({
      method: RequestMethod.Delete,
      url: url,
      headers: this.headers
    });

    return this.http
      .request(new Request(this.requestoptions))
      .map((res: Response) => {
        this.progressOff(false);/*--progress bar stop--*/
        if (res) {
          return [{ status: res.status, json: res.json() }];
        }
      })
      .catch((error: any) => {
        this.progressOff(false);/*--progress bar stop--*/
        return Observable.throw(error);
      });
  }

  public PutRequest(url: string, data: any): any {
    this.progressOff(true);/*--progress bar stop--*/
    this.headers = new Headers();
    this.headers.append("Content-Type", "application/json");
    // this.headers.append("Authorization", localStorage.getItem("token"));
    this.headers.append("Authorization", 'Bearer ' +  localStorage.getItem('token'));

    this.requestoptions = new RequestOptions({
      method: RequestMethod.Put,
      url: url,
      headers: this.headers,
      body: JSON.stringify(data)
    });

    return this.http
      .request(new Request(this.requestoptions))
      .map((res: Response) => {
        this.progressOff(false);/*--progress bar stop--*/
        if (res) {
          return [{ status: res.status, json: res.json() }];
        }
      })
      .catch((error: any) => {
        this.progressOff(false);/*--progress bar stop--*/
        return Observable.throw(error);
      });
  }

  progressOff(info){
    if(info){
      setTimeout(() => {
        this.progress=true;
      }, 0.5);
    }else{
      setTimeout(() => {
        this.progress=false;
      }, 80);
    }
  }

  

}
