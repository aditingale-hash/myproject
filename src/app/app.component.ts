import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MenuItem, PrimeNGConfig } from 'primeng/api';
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
 date3: Date;

 rhcerror:boolean=false;
 norhcerror:boolean=false;

 items: MenuItem[];
  //RhcArry:any[];
//@ViewChild('dt') table: Table;
  constructor(private primengConfig: PrimeNGConfig,private searchService: searchService,private fb:FormBuilder) { }

  title = 'angularproject';
  ngOnInit() {



    this.searchService.getRhc().then(rhc => {
      this.Rhc = rhc;

     console.log(this.Rhc )
      this.loading = false;
    });

      this.reviewForm = this.fb.group({

       // reviewText : new FormControl('', Validators.required),
        'reviewText': new FormControl('', Validators.required)
      });
     

       this.searchService.getnewRhc().then(rhc => {
      this.NewRhc = rhc;

     console.log(this.NewRhc = rhc)
     
    });

     
  
 // this.searchService.getRhc().then(Rhc => this.Rhc = Rhc);
  // console.log(this.Rhc)
  this.cols = [

    { field: 'rhc', header: 'Rhc' },

    { field: 'lineNum ', header: 'lineNum' },

    { field: 'modelName', header: 'modelName' },

    { field: 'description', header: 'description' },

    { field: 'quantity', header: 'quantity' },

    { field: 'promiseDate', header: 'promiseDate' }

  ];


  //date 
  
  }
  reset() {

    this.first = 0;

  }

  onPost(){
   
      let rhcText = this.reviewForm.value.reviewText;

      console.log(rhcText)

     // this.RhcArry = this.Rhc.filter(r=>r.modelName === rhcText);
     // this.RhcArry = this.NewRhc.filter(r=>r.rhc === rhcText);
      if(this.Rhc.find(r=>r.rhc === rhcText)){
      
        this.rhcerror=true;
      }
      else if(this.NewRhc.find(r=>r.rhc === rhcText))
      {
        this.Arry = this.NewRhc.find(r=>r.rhc === rhcText);

        // this.Rhc.push(this.RhcArry)
         this.Rhc.push(this.Arry)
      }
      else if(!(this.Rhc.find(r=>r.rhc === rhcText)) && !(this.NewRhc.find(r=>r.rhc === rhcText)) ){
        this.norhcerror=true;
        
      }
     console.log("searched text :" +  JSON.stringify(this.RhcArry) )

     console.log( this.Arry )
     console.log( typeof( this.Arry) )
    
  }

  
}


  


  


