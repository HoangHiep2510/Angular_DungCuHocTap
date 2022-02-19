import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from "rxjs";
import { ProductModelServer, serverResponse} from "../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private url = environment.SERVER_URL;
  constructor(private http: HttpClient) { };
  getAllProducts(limitOfResults=8): Observable<serverResponse> {
    return this.http.get<serverResponse>(this.url + 'products', {
      params: {
        limit: limitOfResults.toString()
      }
    }).pipe();
  }
  getAllInPageProducts(): Observable<serverResponse> {
    return this.http.get<serverResponse>(this.url + 'products');
  }
  getAllTypeOfButViet(): Observable<serverResponse> {
    return this.http.get<serverResponse>(this.url + 'productOfType/ButViet');
  }

  getAllTypeOfBalo(): Observable<serverResponse> {
    return this.http.get<serverResponse>(this.url + 'productOfType/Balo');
  }

  getAllTypeOfHopBut(): Observable<serverResponse> {
    return this.http.get<serverResponse>(this.url + 'productOfType/HopBut');
  }

  getAllTypeOfTapVo(): Observable<serverResponse> {
    return this.http.get<serverResponse>(this.url + 'productOfType/TapVo');
  }
  getSingleProduct(masp: Number): Observable<ProductModelServer> {
    return this.http.get<ProductModelServer>(this.url + 'products/' + masp);
  }
  getProductsFromType(tenlsp: String, limitOfResults=8): Observable<serverResponse> {
    return this.http.get<serverResponse>(this.url + 'products/loaisanpham/' + tenlsp, {
      params: {
        limit: limitOfResults.toString()
      }
    }).pipe();
  }
  getProductsFromButViet(tenlsp: String, limitOfResults=8): Observable<serverResponse> {
    return this.http.get<serverResponse>(this.url + 'products/sanpham' + tenlsp, {
      params: {
        limit: limitOfResults.toString()
      }
    }).pipe();
  }
  getButVietDefault(limitOfResults=8): Observable<serverResponse> {
    return this.http.get<serverResponse>(this.url + 'products/loaisanpham/Bút bi',{
      params: {
        limit: limitOfResults.toString()
      }
    }).pipe();
  }

}
