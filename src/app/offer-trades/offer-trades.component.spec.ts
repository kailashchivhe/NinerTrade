import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferTradesComponent } from './offer-trades.component';

describe('OfferTradesComponent', () => {
  let component: OfferTradesComponent;
  let fixture: ComponentFixture<OfferTradesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferTradesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferTradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
