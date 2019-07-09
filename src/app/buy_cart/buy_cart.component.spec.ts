import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyCartComponent } from './buy_cart.component';

describe('BuyCartComponent', () => {
  let component: BuyCartComponent;
  let fixture: ComponentFixture<BuyCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
