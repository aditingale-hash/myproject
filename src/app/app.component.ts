import { Component, OnInit, ViewChild } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { data } from 'src/assets/data';
import { searchService } from './service/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 Rhc: data[];
loading: boolean = true;
dataritehite: data[] = [];

  cols: any[] = [];

  first: number = 0;

//@ViewChild('dt') table: Table;
  constructor(private primengConfig: PrimeNGConfig,private searchService: searchService) { }

  title = 'angularproject';
  ngOnInit() {
    this.searchService.getRhc().then(Rhc => {
      this.Rhc = Rhc;

      console.log(this.Rhc = Rhc)
      //this.loading = false;
  });
  this.searchService.getRhc().then(Rhc => this.Rhc = Rhc);
  console.log(this.Rhc)
  this.cols = [

    { field: 'rhc', header: 'Rhc' },

    { field: 'lineNum', header: 'lineNum' },

    { field: 'modelName', header: 'modelName' },

    { field: 'description', header: 'description' },

    { field: 'quantity', header: 'quantity' },
    { field: 'promiseDate', header: 'promiseDate' }

  ];
  }
  reset() {

    this.first = 0;

  }

  }

  


  


