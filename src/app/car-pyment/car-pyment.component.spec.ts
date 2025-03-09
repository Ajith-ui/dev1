import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarPymentComponent } from './car-pyment.component';

describe('CarPymentComponent', () => {
  let component: CarPymentComponent;
  let fixture: ComponentFixture<CarPymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarPymentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarPymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
