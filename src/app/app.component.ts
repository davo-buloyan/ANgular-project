import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { UserService } from './services/user.service';

// import './assets/script.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Angular Router Tutorial';
  ItemsArray = [];

  constructor(
    private router: Router, 
    private service: UserService,
    ) {
      this.getData()
    }
    
  public routTo() {

    console.log( (this.getData()));
    this.router.navigateByUrl('home-component');
  }

  // inject servises in conponent
  // call on constractor

  
  getData() {
    this.service.getConfigResponse().subscribe((data: any) => {
     
      this.ItemsArray = data.data;
      console.log(this.ItemsArray);
      
    })
  }



  // showConfigResponse() {
  //   this.configService.getConfigResponse()
  //     // resp is of type `HttpResponse<Config>`
  //     .subscribe(resp => {
  //       // display its headers
  //       const keys = resp.headers.keys();
  //       this.headers = keys.map(key =>
  //         `${key}: ${resp.headers.get(key)}`);
  
  //       // access the body directly, which is typed as `Config`.
  //       this.config = { ... resp.body };
  //     });
  // }
  

}

