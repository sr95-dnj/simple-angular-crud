import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EmployeeApiService} from '../service/employee.api.service';

@Component({
  selector: 'app-employee-list-show',
  templateUrl: './employee-list-show.component.html',
  styleUrls: ['./employee-list-show.component.css']
})
export class EmployeeListShowComponent implements OnInit {
  employeeList: any;
  employeeId!: string;
  signUpForm!: FormGroup;
  returnUrl!: string;
  submitted = false;
  show!: boolean;
  showDoctorInfo!: boolean;
  serverError = '';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder,
              private employeeApiService: EmployeeApiService) {

    this.route.params.subscribe(params => {
      this.employeeId = this.route.snapshot.params['id'];
    });
  }

  ngOnInit(): void {

    this.signUpForm = this.formBuilder.group({
      userName: ['', Validators.required],
      phoneNo: ['', Validators.required],
      jobQualification: ['', Validators.required],
      orgName: ['', Validators.required]
    });
    this.getEmployeeListBy(this.employeeId);
  }

  get f() {
    return this.signUpForm.controls;
  }

   getEmployeeListBy(employeeId: string){

     this.employeeApiService.getEmployeeListById(employeeId).subscribe(res => {

       this.employeeList = res;

     });
  }

  public onSubmit(){

    this.submitted = true;
    if (this.signUpForm.invalid) {
      return;
    }
    this.employeeApiService.updateEmployee(this.employeeId , this.f.userName.value,
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

  back(){
    this.router.navigate(['employee/list']);
  }

}
