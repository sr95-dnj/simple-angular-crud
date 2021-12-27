import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({providedIn: 'root'})
export class EmployeeApiService {

  constructor(private http: HttpClient) {

  }

  private loginEndPointLocalServer: string = environment.apiHost + '/create';

  private getAllEmployeeApi: string = environment.apiHost + '/show/all/list';
  private getAllEmployeeByIdApi: string = environment.apiHost + '/show/list/by/';
  private updateAllEmployeeByIdApi: string = environment.apiHost + '/update/employee/by/';
  private deleteAllEmployeeByIdApi: string = environment.apiHost + '/delete/employeeList/by/';

  createEmployee(users: string, phoneNo: string, jbQualification: string, orgNames: string): Observable<any> {

    return this.http.post(this.loginEndPointLocalServer, {

        userName: users,
        phoneNumber: phoneNo,
        jobQualification: jbQualification,
        orgName: orgNames

      },
    );
  }

  public getEmployeeList(): Observable<any> {

    return this.http.get(this.getAllEmployeeApi, httpOptions)
      .pipe(map(res => res));

  }

  public getEmployeeListById(employeeId: string): Observable<any> {

    return this.http.get(this.getAllEmployeeByIdApi + employeeId, httpOptions)
      .pipe(map(res => res));

  }

  updateEmployee(employeeId: string, users: string, phoneNo: string, jbQualification: string, orgNames: string): Observable<any> {

    return this.http.put(this.updateAllEmployeeByIdApi + employeeId, {

        userName: users,
        phoneNumber: phoneNo,
        jobQualification: jbQualification,
        orgName: orgNames

      },
    );
  }

  public deleteEmployee(employeeId: string): Observable<any> {

    return this.http.delete(this.deleteAllEmployeeByIdApi + employeeId, httpOptions)
      .pipe(map(res => res));

  }
}
