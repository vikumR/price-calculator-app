import { MatSelectModule } from '@angular/material/select';
import { ProductService } from './product.service';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductSelectComponent } from './productselect/productselect.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProducttableComponent } from './producttable/producttable.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CalculatorComponent } from './calculator/calculator.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from "@angular/material/form-field";

@NgModule({
  declarations: [
    AppComponent,
    ProductSelectComponent,
    ProducttableComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    HttpClientModule,
    FormsModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatGridListModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      // {path: '', component: AppComponent},
      { path: 'list', component: ProductSelectComponent },
      { path: 'calculate', component: CalculatorComponent }
    ])
  ],
  providers: [ProductService,],
  // exports: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
