import { Component, OnInit } from '@angular/core';
import {ProductApiService} from "../../service/product.api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductModel} from "../../model/product.model";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: ProductModel[] = new Array<ProductModel>();

  constructor(
    private productService: ProductApiService,
    private  router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getAllProducts()
  }

  getAllProducts(){
    this.productService.getAllProducts().subscribe(res =>{
       this.productList = res;
    })
  }

  backToHome() {
    this.router.navigate([''])
  }

  onProductEditById(id: string) {
    this.router.navigate(['update-product/' + id]);

  }
}
