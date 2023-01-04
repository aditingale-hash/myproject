import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';
import { data } from 'src/assets/data';
import { searchService } from './service/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
 Rhc: data[];
 NewRhc:data[];
loading: boolean = true;
//sdataritehite: data[];

  cols: any[] = [];

  first: number = 0;
  
  loginForm: FormGroup;

  reviewForm: FormGroup;
  RhcArry: any;
 Arry: any;
  //RhcArry:any[];
//@ViewChild('dt') table: Table;
  constructor(private primengConfig: PrimeNGConfig,private searchService: searchService) { }

  title = 'angularproject';
  ngOnInit() {

    this.searchService.getRhc().then(rhc => {
      this.Rhc = rhc;

     console.log(this.Rhc )
      this.loading = false;
    });

      this.reviewForm = new FormGroup({

        reviewText : new FormControl()
      
      });

       this.searchService.getnewRhc().then(rhc => {
      this.NewRhc = rhc;

     console.log(this.NewRhc = rhc)
     
    });

     
  
 // this.searchService.getRhc().then(Rhc => this.Rhc = Rhc);
  // console.log(this.Rhc)
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

  onPost(){
   
      let rhcText = this.reviewForm.value.reviewText;

      console.log(rhcText)

     // this.RhcArry = this.Rhc.filter(r=>r.modelName === rhcText);
      this.RhcArry = this.NewRhc.filter(r=>r.rhc === rhcText);
      
      this.Arry = this.NewRhc.find(r=>r.rhc === rhcText);

      this.Rhc.push(this.RhcArry)
      this.Rhc.push(this.Arry)

     console.log("searched text :" +  JSON.stringify(this.RhcArry) )

     console.log( this.Arry )
     console.log( typeof( this.Arry) )
    
  }

  
}


  


  


