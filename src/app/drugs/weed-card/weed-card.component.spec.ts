import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeedCardComponent } from './weed-card.component';

describe('WeedCardComponent', () => {
  let component: WeedCardComponent;
  let fixture: ComponentFixture<WeedCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeedCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
