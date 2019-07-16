import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {StockValueComponent} from '../app/stock-value/stock-value.component';
import {SearchValueComponent} from '../app/search-value/search-value.component';

const routes: Routes =[
  { path: '', component:StockValueComponent},
  { path: 'search', component:SearchValueComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),CommonModule
  ],
  declarations: [], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
