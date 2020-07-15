import { Component, OnInit } from '@angular/core';
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

  constructor(
    private drugsService: DrugsService
  ) {}

  ngOnInit() {
    this.weeds = this.drugsService.getWeeds();
  }

}
