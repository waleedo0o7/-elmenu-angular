import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute  } from '@angular/router';
import { ItemsService } from '../items.service';
import * as $ from 'jquery'
declare var $ : any;

@Component({
  selector: 'app-one-item',
  templateUrl: './one-item.component.html',
  styleUrls: ['./one-item.component.scss']
})
export class OneItemComponent implements OnInit {

  oneItemData:any;

  imagesLink;

  constructor( service:ItemsService,private route: ActivatedRoute) {
    this.oneItemData = JSON.parse(localStorage.getItem("oneItem"));
    this.imagesLink = service.imagesLink;
    service.hideLoading();
  }  

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }
}