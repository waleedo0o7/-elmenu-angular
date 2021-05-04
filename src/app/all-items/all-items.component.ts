import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import * as $ from 'jquery'
import { ItemsService } from '../items.service';

declare var $: any;

@Component({
  selector: 'app-all-items',
  templateUrl: './all-items.component.html',
  styleUrls: ['./all-items.component.scss']
})

export class AllItemsComponent implements OnInit { 

  restaurant;
  categories = [];
  categoryName;
  allItems;


  constructor(private items:ItemsService) {
    this.items.getData().subscribe(data=>{
      this.restaurant =  data;
      this.categories = this.restaurant.data.categories;
      this.allItems = this.categories[0].items;
      this.categoryName = this.categories[0].arName;
      this.runOwl();
    })
  }

  getCategoryItems(id){
    this.allItems = this.categories[id].items;
    this.categoryName = this.categories[id].arName;
    console.log(id)
    console.log(this.allItems)
  }


  runOwl(){
    setTimeout( function(){

      $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        responsive:{
            0:{
                items:3
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
      }) 
    }, 0)
  }
   

  ngOnInit(): void {
  }

  ngAfterContentInit(){
  }
  
  ngAfterViewInit() {    
  }

  ngAfterViewChecked(){
  }
   
}