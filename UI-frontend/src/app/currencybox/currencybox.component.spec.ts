import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyboxComponent } from './currencybox.component';

describe('CurrencyboxComponent', () => {
  let component: CurrencyboxComponent;
  let fixture: ComponentFixture<CurrencyboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrencyboxComponent]
    });
    fixture = TestBed.createComponent(CurrencyboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
