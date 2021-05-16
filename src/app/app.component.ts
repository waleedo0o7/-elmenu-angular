import { Component, OnInit } from '@angular/core';
import {ItemsService} from './items.service';

declare var gsap : any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  title = 'elmenu-angular';
  lang:any;
  theme:any;
  showMenuVar = this.service.showMenuVar

  constructor( private service : ItemsService) {
    this.lang = this.service.lang;
    this.theme = this.service.theme;
  }

  changeLang(){
      if (localStorage.getItem("lang") == "rtl") {
        localStorage.setItem("lang", "ltr");
        this.service.lang = "ltr"
        this.lang = "ltr"
      } else {
        localStorage.setItem("lang", "rtl");
        this.service.lang = "rtl"
        this.lang = "rtl"
      }
  }

  changeTheme(){  
    if (localStorage.getItem("theme") == "dark") {
      localStorage.setItem("theme", "light");
      this.service.theme = "light"
      this.theme = "light"
    } else {
      localStorage.setItem("theme", "dark");
      this.service.theme = "dark"
      this.theme = "dark"
    }
  }


  showMenu(){
    this.service.showMenu();
  }

  hideMenu(){
    this.service.hideMenu();
  }

  ngOnInit() {
  }
  
  ngAfterViewInit() {
  }

}