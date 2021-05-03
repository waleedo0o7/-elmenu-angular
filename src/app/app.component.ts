import { Component, OnInit } from '@angular/core';
import {ItemsService} from './items.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'elmenu-angular';
  restaurant;

  constructor(private items:ItemsService) {
    this.items.getData().subscribe(data=>{
      this.restaurant =  data;
    })
  }

  ngOnInit() {
  }
  
  ngAfterViewInit() {
  }

}