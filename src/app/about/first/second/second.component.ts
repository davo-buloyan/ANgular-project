import { Component, OnInit, Input,  Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})

export class SecondComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() isActive: boolean;
  @Output() firstToChange = new EventEmitter()

  isActiv = false


  abulik(event){
    this.isActiv= event
    console.log(event)
  }

  changeFirst(event) {
    this.firstToChange.emit(event)
  }
}
