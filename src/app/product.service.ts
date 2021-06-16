import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from './Product';
import { DataModel } from './DataModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiServerUrl}/products/all`);
  }

  public getProduct(productId: number): Observable<DataModel[]> {
    return this.http.get<DataModel[]>(`${this.apiServerUrl}/products/${productId}`);
  }

  public calculateTotal(products: Product[]): Observable<Number> {
    return this.http.post<Number>(`${this.apiServerUrl}/products/total`, products);
  }

}
