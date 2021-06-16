import { DataModel } from './../DataModel';
import { ProductService } from '../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { HttpErrorResponse } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-product-select',
  templateUrl: './productselect.component.html',
  styleUrls: ['./productselect.component.css']
})
export class ProductSelectComponent implements OnInit {

  public products: Product[] = [];
  public selectedValue: Product | any;
  public dataSource = new MatTableDataSource<DataModel>();

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.products = this.getProducts();
  }

  public getProducts(): Product[] {
    this.productService.getProducts().subscribe(
      (response: Product[]) => {
        this.products = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
    return this.products;
  }

  public setProduct() {
    console.log(this.selectedValue?.productName);
    this.productService.getProduct(this.selectedValue?.id).subscribe(
      (response: DataModel[]) => {
        this.dataSource.data = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
    console.log(this.dataSource);
  }

}
