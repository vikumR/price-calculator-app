import { ProductService } from './product.service';
import { Product } from './Product';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator-app';

  constructor(private router: Router) {
  }

  public listBtnClick() {
    this.router.navigateByUrl('/list');
  }

  public calcBtnClick() {
    this.router.navigateByUrl('/calculate');
  }
}
