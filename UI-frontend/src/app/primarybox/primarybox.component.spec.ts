import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryboxComponent } from './primarybox.component';

describe('PrimaryboxComponent', () => {
  let component: PrimaryboxComponent;
  let fixture: ComponentFixture<PrimaryboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrimaryboxComponent]
    });
    fixture = TestBed.createComponent(PrimaryboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
