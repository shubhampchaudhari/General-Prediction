import { Component, OnInit} from '@angular/core';
import {StockValueService} from '../stock-value.service';
import { StockValue } from '../stock-value/stock';

@Component({
  selector: 'app-search-value',
  templateUrl: './search-value.component.html',
  styleUrls: ['./search-value.component.css']
})
export class SearchValueComponent implements OnInit {

  private currentCompanyStockValue : StockValue;
  private pastCompanyYouSearch : StockValue[] =[];

  
  constructor(private stockvalueservice : StockValueService) { }

  getStockValue (companyName: string): void {
    this.currentCompanyStockValue = this.stockvalueservice.getStockValue(companyName);

    this.currentCompanyStockValue.searchTime = (new Date()).toTimeString();
    this.pastCompanyYouSearch.push(this.currentCompanyStockValue);
  }


  ngOnInit() {
  }

}
