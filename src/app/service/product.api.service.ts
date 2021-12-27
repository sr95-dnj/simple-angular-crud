import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({providedIn: 'root'})
export class ProductApiService {

  constructor(private http: HttpClient) {

  }

  private loginEndPointLocalServer: string = environment.productApiHost + '/create';

  private getAllProductApi: string = environment.productApiHost + '/show/all/list';
  private getAllProductByIdApi: string = environment.productApiHost + '/show/list/by/';
  private updateAllProductByIdApi: string = environment.productApiHost + '/update/product/by/';
  private deleteAllProductByIdApi: string = environment.productApiHost + '/delete/productList/by/';

  createProducts(model: any){
    console.log(model)
    const url: string = environment.productApiHost + '/create';
    return this.http.post(url, model).pipe(map((res: any) => {
      return res;
    }));
  }

  getAllProducts(){
    const url: string = environment.productApiHost + '/get-all-product';
    return this.http.get(url).pipe(map((res: any) => {
      return res;
    }));
  }

  getProductById(id: number){
    const url: string = environment.productApiHost + '/get-product-by-id/' + id;
    return this.http.get(url).pipe(map((res: any) => {
      return res;
    }));
  }

  createProduct(users: string, phoneNo: string, jbQualification: string, orgNames: string): Observable<any> {

    return this.http.post(this.loginEndPointLocalServer, {

        userName: users,
        phoneNumber: phoneNo,
        jobQualification: jbQualification,
        orgName: orgNames

      },
    );
  }

  public getProductList(): Observable<any> {

    return this.http.get(this.getAllProductApi, httpOptions)
      .pipe(map(res => res));

  }

  public getProductListById(productId: string): Observable<any> {

    return this.http.get(this.getAllProductByIdApi + productId, httpOptions)
      .pipe(map(res => res));

  }

  updateProduct(productId: string, users: string, phoneNo: string, jbQualification: string, orgNames: string): Observable<any> {

    return this.http.put(this.updateAllProductByIdApi + productId, {

        userName: users,
        phoneNumber: phoneNo,
        jobQualification: jbQualification,
        orgName: orgNames

      },
    );
  }

  public deleteProduct(productId: string): Observable<any> {

    return this.http.delete(this.deleteAllProductByIdApi + productId, httpOptions)
      .pipe(map(res => res));

  }
}
