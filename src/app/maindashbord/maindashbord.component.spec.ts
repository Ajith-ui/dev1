import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaindashbordComponent } from './maindashbord.component';

describe('MaindashbordComponent', () => {
  let component: MaindashbordComponent;
  let fixture: ComponentFixture<MaindashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaindashbordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaindashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
