import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllItemsComponent } from './all-items/all-items.component';
import { OneItemComponent } from './one-item/one-item.component';

import { HttpClientModule } from "@angular/common/http"
import { FormsModule } from '@angular/forms';

 

@NgModule({
  declarations: [
    AppComponent,
    AllItemsComponent,
    OneItemComponent
  ],
  imports: [
    [BrowserModule, FormsModule],
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}