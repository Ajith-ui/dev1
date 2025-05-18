import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlldashbordComponent } from './alldashbord.component';

describe('AlldashbordComponent', () => {
  let component: AlldashbordComponent;
  let fixture: ComponentFixture<AlldashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlldashbordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlldashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
