import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute  } from '@angular/router';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-one-item',
  templateUrl: './one-item.component.html',
  styleUrls: ['./one-item.component.scss']
})
export class OneItemComponent implements OnInit {

  oneItemData;

  constructor(private items:ItemsService,private route: ActivatedRoute) {
    // const firstParam: string = this.route.snapshot.queryParamMap.get('id');
    // alert(firstParam);
    let myData = this.route.snapshot.paramMap.get('data');
    this.oneItemData = JSON.parse(myData);
    console.log(this.oneItemData)
    
  }  

  ngOnInit(): void {
  }

}
