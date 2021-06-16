import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Product } from '../Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  public products: Product[] = [];
  public productsInCart: Product[] = [];
  public product: Product | any;
  public selectedValue: Product | any;
  public units = new FormControl();
  public cartons = new FormControl();
  public total: Number = 0;

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

  public addToCart(): void {
    if (this.selectedValue) {
      if (this.productsInCart) {
        this.productsInCart.forEach(element => {
          if (element.id === this.selectedValue.id) {
            return;
          }
        });
      }

      this.product = this.selectedValue;
      this.product.units = this.units.value;
      this.product.cartons = this.cartons.value;

      // if(this.product.units == null) {
      //   this.product.units = 0;
      //   // this.product.cartons = this.cartons.value;
      //   console.log("zero units");
      // }

      if (this.units.value != null && this.cartons.value == null) {
        var quotient = Math.floor(this.units.value / this.product.unitsPerCarton);
        var remainder = this.units.value % this.product.unitsPerCarton;

        this.product.units = remainder;
        this.product.cartons = quotient;
      }

      // console.log("units: " + this.product.units);
      // console.log("cartons: " + this.product.cartons);
    }
    if (this.product.units == null) {
      this.product.units = 0;
      // this.product.cartons = this.cartons.value;
      console.log("zero units");
    }
    this.productsInCart.push(this.product);
    console.log("units: " + this.product.units);
    console.log("cartons: " + this.product.cartons);
    console.log("added to cart" + this.productsInCart);
  }

  public clearCart(): void {
    this.productsInCart = [];
    this.total = 0;
    console.log("cart cleared " + this.productsInCart);
  }

  public getTotal(): void {
    this.productService.calculateTotal(this.productsInCart).subscribe(
      (response: Number) => {
        this.total = response;
        console.log("total " + this.total);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
