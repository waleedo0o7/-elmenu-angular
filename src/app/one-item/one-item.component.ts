import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute  } from '@angular/router';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-one-item',
  templateUrl: './one-item.component.html',
  styleUrls: ['./one-item.component.scss']
})
export class OneItemComponent implements OnInit {

  oneItemData:any;

  constructor( service:ItemsService,private route: ActivatedRoute) {
    this.oneItemData = JSON.parse(localStorage.getItem("oneItem"));
    console.log(this.oneItemData)
  }  

  ngOnInit(): void {

  }

}