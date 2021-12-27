import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeinfoComponent } from './employeeinfo.component';

describe('EmployeeinfoComponent', () => {
  let component: EmployeeinfoComponent;
  let fixture: ComponentFixture<EmployeeinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
