import { Component, OnInit, Input,  Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})

export class SecondComponent implements OnInit {
  count = 0;
  constructor() { }

  ngOnInit(): void {
  }
  

  @Input() isActive: boolean;
  @Output() firstToChange = new EventEmitter()
  @Output() firstValueToChange = new EventEmitter()

  isActiv = false


  abulik(event){
    this.isActiv= event
    // console.log(event)
  }

  changeFirst(event) {
    this.firstToChange.emit(event)
  }

  firstCountPlus(event) {
    this.firstValueToChange.emit(event)
  }

  countPlus(event) {
    this.count = event
    console.log(event);
  }
}
