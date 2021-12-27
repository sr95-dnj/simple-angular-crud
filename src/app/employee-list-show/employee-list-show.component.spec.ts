import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeListShowComponent } from './employee-list-show.component';

describe('EmployeeListShowComponent', () => {
  let component: EmployeeListShowComponent;
  let fixture: ComponentFixture<EmployeeListShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeListShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
