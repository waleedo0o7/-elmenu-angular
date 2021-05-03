import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllItemsComponent } from './all-items/all-items.component';
import { OneItemComponent } from './one-item/one-item.component';

const routes: Routes = [
  { path: '', redirectTo: '/all-items', pathMatch: 'full' },
  { path: 'all-items', component: AllItemsComponent},
  { path: 'one-item', component: OneItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }