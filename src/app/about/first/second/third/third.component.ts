import { Component, OnInit, Input,  Output, EventEmitter } from '@angular/core';
import { FnParam } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {
  status: boolean = false
  constructor() { }

  ngOnInit(): void {
  }
  count = 0;
  secondCount = 0;
  firstCount = 0;

  valueChange(){
    this.count ++ ;
  }

  @Input() isActive: boolean;
  @Output() secondToChange = new EventEmitter()
  @Output() firstToChange = new EventEmitter()
  @Output() secondValueToChange = new EventEmitter()
  @Output() firstCountToChange = new EventEmitter()
  
  isActiv = true
  changeParentSecond(){
    const status = this.status = !this.status
    this.secondToChange.emit(status)
  }

  secondValueChange(){
    ++this.secondCount;
    this.secondValueToChange.emit(this.secondCount)    
  }

  firstValChange(){
    ++this.firstCount;
    this.firstCountToChange.emit(this.firstCount)    
  }

  changeParentFirst(){
    const status = this.status = !this.status
    this.firstToChange.emit(status)
  }  
}
