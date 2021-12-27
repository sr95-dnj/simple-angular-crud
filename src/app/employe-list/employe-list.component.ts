import { Component, OnInit } from '@angular/core';
import {EmployeeApiService} from '../service/employee.api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employe-list',
  templateUrl: './employe-list.component.html',
  styleUrls: ['./employe-list.component.css']
})
export class EmployeListComponent implements OnInit {

  employeeList: Array<any> = [];
  getListEmployee: Array<any> = [];
  config: any;
  searchText: any;
  constructor(private employeeApiService: EmployeeApiService,
              private router: Router) { }

  ngOnInit(): void {
    this.getEmployeeProfile();
  }
  getEmployeeProfile() {

    this.employeeApiService.getEmployeeList().subscribe(res => {
      res.forEach((employeedata: any) => {
        this.employeeList = employeedata;
        this.getListEmployee.push(this.employeeList);
      });

    });
  }

  onEmployeeShowById(id: any) {
    this.router.navigate(['employee/list/show-by/' + id]);
  }

  onEmployeeEditById(id: any) {
    this.router.navigate(['employee/list/show-by/' + id]);
  }

  onEmployeeDeleteById(id: any) {

    this.employeeApiService.deleteEmployee(id).subscribe(res => {
      this.router.navigate(['/']);
    });
  }
}
