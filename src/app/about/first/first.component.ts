import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
  }
  @Input() isActive: boolean;

  isActiv = false

 
  abulik(event){
    this.isActiv=event
    console.log(event)
  }


}
