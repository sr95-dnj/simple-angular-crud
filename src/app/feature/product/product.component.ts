import { Component, OnInit } from '@angular/core';
import {ProductModel} from "../../model/product.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EmployeeApiService} from "../../service/employee.api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductApiService} from "../../service/product.api.service";
// import {ProductModel} from "../../model/product.model";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

   model : ProductModel = new ProductModel();
   id = this.route.snapshot.params['id'];

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private productService : ProductApiService,
              private router: Router) {
  }


  ngOnInit(): void {
    this.getProductById();
  }

  createProduct(){
    this.productService.createProducts(this.model).subscribe(res =>{
      console.log(res);
      this.router.navigate(['/product-list'])
    })
  }

  getProductById(){
    this.productService.getProductById(this.id).subscribe(res =>{
      console.log(res);
      this.model = res;
    })
  }


  backToHome() {
    this.router.navigate([''])
  }
}
