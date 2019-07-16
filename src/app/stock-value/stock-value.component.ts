import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router';

import {StockValueService} from '../stock-value.service';



@Component({
  selector: 'app-stock-value',
  templateUrl: './stock-value.component.html',
  styleUrls: ['./stock-value.component.css']
})
export class StockValueComponent implements OnInit {

  constructor(private router: Router) { }

  gotogetStockValue(){
   this.router.navigate(['search']);
  }

  ngOnInit() {}

  }
