import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { UserService } from '../services/user.service';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class  DashboardComponent  {
  title = 'Angular Router Tutorial';
  ItemsArray = [];
  myForm : FormGroup;
  deleteIndex: number ;
  isCanEdit : boolean; 
  editIndex: number;
  
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

  deleteRow(i){
    this.ItemsArray.splice(i, 1);
    setTimeout(() => {
      // (this.modalOpenerBtn.nativeElement as HTMLButtonElement).click();
    });
}

heyYou(i) {
  this.deleteIndex = i;
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

  if(this.isCanEdit === true){
    this.ItemsArray.splice(this.editIndex, 1, this.myForm.value);
    this.isCanEdit = false;
    return

  }
    // this.ItemsArray.unshift(this.myForm.value);
    if(this.myForm.valid){
      this.ItemsArray.unshift(this.myForm.value)
      console.log(this.ItemsArray)
      this.setLocal('myData', this.ItemsArray)
    }
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

editRow(i) {

  this.isCanEdit = true; 
  this.editIndex = i; 
 console.log(this.ItemsArray[i]);
  this.myForm.patchValue(this.ItemsArray[i]);

  

}

save(){
  const  data = this.myForm.value
  console.log(data)
}

editRowDate(i){
  
}
  

}

