import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { WeedModel } from './models';
import { DrugsService } from './drugs.service';

/**
 * 1. const cmp = new DrugsComponent()
 * 2. cmp.ngOnInit()
 * 3.
 * */

@Component({
  selector: 'app-drugs',
  templateUrl: './drugs.component.html',
  styleUrls: ['./drugs.component.css']
})
export class DrugsComponent implements OnInit {

  weeds: Array<WeedModel>;

  @ViewChild('modalOpenerBtn') modalOpenerBtn: ElementRef;

  selectedItem: WeedModel;

  constructor(
    private drugsService: DrugsService
  ) {}

  ngOnInit() {
    this.weeds = this.drugsService.getWeeds();
  }

  deleteItem(id: number) {
    this.weeds = this.weeds.filter(item => {
      if (item.id === id) {
        return false;
      }
      return true;
    });
  }

  editItem(id: number) {
    this.selectedItem = this.weeds.find(item => item.id === id);

    setTimeout(() => {
      (this.modalOpenerBtn.nativeElement as HTMLButtonElement).click();
    });
  }

  shuffleList() {
    this.weeds = this.weeds
      .slice()
      .sort(() => Math.random() - 0.5);
  }

}
