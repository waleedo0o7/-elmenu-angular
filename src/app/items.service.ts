import { Injectable } from '@angular/core';
import * as $ from 'jquery'
declare var $: any;
declare var gsap : any;
import {HttpClient, HttpClientModule} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})

export class ItemsService {
  restaurant: Object;
  items: any;
  lang : any;
  theme : any;
  showMenuVar = gsap.timeline();
  imagesLink : any = "http://menuapi.egydigital.net/uploads/";


constructor( private http:HttpClient) {

    if (localStorage.getItem("lang")) {
      this.lang = localStorage.getItem("lang");
    } else {
      localStorage.setItem("lang", "rtl");
      this.lang = "rtl"
    }

    if (localStorage.getItem("theme")) {
      this.theme = localStorage.getItem("theme");
    } else {
      localStorage.setItem("theme", "dark");
      this.theme = "dark";
    }
  }

  getData(){
    let url = 'http://menuapi.egydigital.net/MyMenu/GetResturantInfo';
    return this.http.post(
      url,
      {"companyServiceId": 4}
    );
  }

  showMenu(){
    this.showMenuVar.to(".layer", {y: '100vh', duration: 1 , ease: "power2" , stagger : 0.1});
    this.showMenuVar.play();
  }

  hideMenu(){
    this.showMenuVar.reverse();
  }

  hideLoading(){
    setTimeout(function(){
      $(".loading").fadeOut();
    },200)
  }


}