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

export class AppComponent implements OnInit {
  Rhc: data[];
  NewRhc: data[];
  loading: boolean = true;
  //sdataritehite: data[];

  cols: any[] = [];

  first: number = 0;

  loginForm: FormGroup;

  reviewForm!: FormGroup;
  RhcArry: any;
  Arry: any;
  date3: Date;


  items: MenuItem[];
 


  fullmsg:boolean=false;
emptymsg:boolean=false;
  errormsg: boolean = false;

  rhcerror: boolean = false;

  dateerror: boolean = false;

  norhcerror: boolean = false;
 
  submitted=false
  //RhcArry:any[];
  //@ViewChild('dt') table: Table;
  constructor(private primengConfig: PrimeNGConfig, private searchService: searchService,private fb:FormBuilder) { }

  title = 'angularproject';
  ngOnInit() {

    this.searchService.getRhc().then(rhc => {
      this.Rhc = rhc;

      console.log(this.Rhc)
      this.loading = false;
    });

    this.reviewForm = this.fb.group({

      reviewText: ['',Validators.required],
      datedata: ['',Validators.required]

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


    //date 

  }
  reset() {

    this.first = 0;

  }

  onPost() {

   

    let rhcText = this.reviewForm.value.reviewText;
    let promise = this.reviewForm.value.datedata;

    console.log(rhcText)

    // this.RhcArry = this.Rhc.filter(r=>r.modelName === rhcText);
    // this.RhcArry = this.NewRhc.filter(r=>r.rhc === rhcText);
    if (this.Rhc.find(r => r.rhc === rhcText)) {

      this.rhcerror = true;
    }
    else if (this.NewRhc.find(r => r.rhc === rhcText)) {
      this.Arry = this.NewRhc.find(r => r.rhc === rhcText);

      // this.Rhc.push(this.RhcArry)
      this.Rhc.push(this.Arry)
    }
  //  else if (this.reviewForm.value.reviewText){
    //  this.errormsg = true;
    //}
    else if((this.reviewForm.value.reviewText===null) || !this.reviewForm.value.datedata){
            this.emptymsg=true;
    }

    if(this.NewRhc.find(r => r.rhc === rhcText)){
      this.norhcerror=false;
    }else if(this.Rhc.find(r => r.rhc === rhcText)){
      this.norhcerror=false;
    }else{
      this.norhcerror=true;
    }
    

     if(this.reviewForm.value.reviewText && this.reviewForm.value.datedata){
          this.fullmsg=true;
}
    console.log("searched text :" + JSON.stringify(this.RhcArry))
//console.log("date:" +JSON.stringify(this.date))
    console.log(this.Arry)
    console.log(typeof (this.Arry))
 
    let month = promise.getMonth() + 1;

    let day = promise.getDate();



    if (month < 10) {

      month = '0' + month;

    }



    if (day < 10) {

      day = '0' + day;

    }



    let finalDate = promise.getFullYear() + '-' + month + '-' + day;



    if (this.Rhc.find(r => r.promiseDate === finalDate)) {



      this.dateerror = true;

    }

    if (!(this.Rhc.find(r => r.promiseDate === finalDate))) {



      this.norhcerror = true;

    }

   

    else if(this.NewRhc.find(r => r.promiseDate === finalDate)){



      this.Arry = this.NewRhc.find(r => r.promiseDate === finalDate);

      this.Rhc.push(this.Arry)

   

    }

    console.log("DAte Arry :" +  JSON.stringify(this.Arry))



    console.log("DATE IS :" + promise.getFullYear() + '-' + month + '-' + day);

    console.log("DATE IS :" + typeof(promise.getFullYear() + '-' + month + '-' + day));

    this.submitted = true
    
    if(this.reviewForm.invalid){
      return
    }
  }





}
   
  











