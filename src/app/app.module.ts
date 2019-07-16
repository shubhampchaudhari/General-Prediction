import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StockValueComponent } from './stock-value/stock-value.component';
import { StockValueService } from './stock-value.service';
import { AppRoutingModule } from './app-routing.module';
import { SearchValueComponent } from './search-value/search-value.component';


@NgModule({
  declarations: [
    AppComponent,
    StockValueComponent,
    SearchValueComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [StockValueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
