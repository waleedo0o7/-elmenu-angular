import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor( private http:HttpClient) { }

  getData(){
    let url = 'http://67.225.214.75:50454/MyMenu/GetResturantInfo?Id=4';
    return this.http.get(url);
  }
  
}