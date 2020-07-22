import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { UserService } from '../services/user.service';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder} from '@angular/forms';
import { DialogService } from "../shared/dialog.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
// export class DashboardComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
export class  DashboardComponent  {
  title = 'Angular Router Tutorial';
  ItemsArray = [];
  myForm : FormGroup;
  
  

  constructor(
    private router: Router, 
    private service: UserService,
    private formBuilder: FormBuilder,
    private dialogService: DialogService,
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
    this.dialogService.openConfirmDialog();

    // this.ItemsArray.splice(i, 1);
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

editRow(i) {
 console.log(this.ItemsArray[i]);
//  patchvalue
  this.myForm.patchValue(this.ItemsArray[i])
  
  // group.get('isEditable').setValue(true);
}

save(){
  const  data = this.myForm.value
  console.log(data)
}

editRowDate(i){
  console.log(i);
  
}
  

}

