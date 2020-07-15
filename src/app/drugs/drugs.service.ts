import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { WeedModel } from "./models";


@Injectable()
export class DrugsService {

  constructor(
    private httpClient: HttpClient
  ) {}

  getWeeds(): Array<WeedModel> {
    return [
      new WeedModel('Sativa', 'Some description', 30, '/assets/images/sativa.jpg'),
      new WeedModel('Indica', 'Some description', 50, '/assets/images/indica.jpg'),
      new WeedModel('Hybrid', 'Some description', 40, '/assets/images/hybrid.jpg'),
    ];
  }

}
