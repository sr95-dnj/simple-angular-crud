import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EmployeeApiService} from '../service/employee.api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employeeinfo',
  templateUrl: './employeeinfo.component.html',
  styleUrls: ['./employeeinfo.component.css']
})

export class EmployeeinfoComponent implements OnInit {

  signUpForm!: FormGroup;
  returnUrl!: string;
  submitted = false;
  show!: boolean;
  showDoctorInfo!: boolean;
  serverError = '';


  constructor(private formBuilder: FormBuilder,
              private employeeApiService: EmployeeApiService,
              private router: Router) {
  }


  ngOnInit(): void {

    this.signUpForm = this.formBuilder.group({
      userName: ['', Validators.required],
      phoneNo: ['', Validators.required],
      jobQualification: ['', Validators.required],
      orgName: ['', Validators.required]
    });

  }

  get f() {
    return this.signUpForm.controls;
  }

  public onSubmit() {

    this.submitted = true;
    if (this.signUpForm.invalid) {
      return;
    }

    this.employeeApiService.createEmployee(this.f.userName.value,
      this.f.phoneNo.value,
      this.f.jobQualification.value,
      this.f.orgName.value)
      .subscribe(
        data => {
          /*Toast.fire({type: 'success', title: 'Sign Up in successfully'});*/
          this.router.navigate(['employee/list']);
        },
        error => {
          if (error.status === 500) {
            this.serverError = 'Already taken phone number';
          }
        });
  }
}
