import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WeedModel } from '../models';

@Component({
  selector: 'app-weed-card',
  templateUrl: './weed-card.component.html',
  styleUrls: ['./weed-card.component.css']
})
export class WeedCardComponent implements OnInit {

  @Input() weed: WeedModel;

  @Output() delete = new EventEmitter<number>();

  @Output() edit = new EventEmitter<number>();

  @Output() shuffle = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {}

  onDelete() {
    this.delete.emit(this.weed.id);
  }

  onShuffle() {
    this.shuffle.emit();
  }

  onEdit() {
    this.edit.emit(this.weed.id);
  }

}
