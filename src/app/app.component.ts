import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { UserService } from './services/user.service';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})

export class AppComponent {
  title = 'Angular Router Tutorial';
  ItemsArray = [];
  myForm : FormGroup;
  

  constructor(
    private router: Router, 
    private service: UserService,
    private formBuilder: FormBuilder,
    ) 
    
    {
      this.getData()
      this.myForm = formBuilder.group({
        
        id: ["", [Validators.required]],
        email: ["", [ Validators.required, Validators.email]],
        first_name: ["", [Validators.required]],
        last_name: ["", [Validators.required]],
        avatar: ["", [Validators.required]],
    });
    }

    ngOnInit() {
      if(window.localStorage.myData != undefined || null){

      } 
   }
 

  public routTo() {

    console.log( (this.getData()));
    this.router.navigateByUrl('home-component');
  }

  public deleteRow(i){
    this.ItemsArray.splice(i, 1);
}

  // inject servises in conponent
  // call on constractor

  getData() {
    this.service.getConfigResponse().subscribe((data: any) => {
     
      this.ItemsArray = data.data;
      console.log(this.ItemsArray);
      
    })
  }


submit(){
    // this.ItemsArray.unshift(this.myForm.value);
    console.log(this.myForm);
    this.ItemsArray.unshift(this.myForm.value)
    console.log(this.ItemsArray)
    this.setLocal('myData', this.ItemsArray)
}

getLocal(key: any): any {
  const myData = window.localStorage.getItem('myData');
  if (myData) {
    return JSON.parse(myData)
  }
}

setLocal(key: string, value: any): void {
  const myData = JSON.stringify(value)
  window.localStorage.setItem(key, myData)
}




// getLocal(key: string): any {
//   const data = window.localStorage.getItem(key);
//   if (data) {
//     return JSON.parse(data);
//   } else {
//     return null;
//   }
// }

// setLocal(key: string, value: any): void {
//   const data = value === undefined ? '' : JSON.stringify(value);
//   window.localStorage.setItem(key, data);
// }



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

