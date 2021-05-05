import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  restaurant: Object;
  items: any;

  constructor( private http:HttpClient) { }

  getData(){
    let url = 'http://menuapi.egydigital.net/MyMenu/GetResturantInfo';
    return this.http.post(
      url,
      {"companyServiceId": 4}
    );
  }

  oneItemData: any;

  sendItemData(itemData){
    this.oneItemData = itemData
  }
  
}