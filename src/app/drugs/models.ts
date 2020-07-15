let id: number = 0;

export class WeedModel {
  id: number;
  type: 'Sativa' | 'Indica' | 'Hybrid';
  description: string;
  thc: number;
  imgSrc: string;

  constructor(
    type: 'Sativa' | 'Indica' | 'Hybrid',
    description: string,
    thc: number,
    imgSrc: string
  ) {
    this.id = id++;
    this.type = type;
    this.description = description;
    this.thc = thc;
    this.imgSrc = imgSrc;
  }
}
