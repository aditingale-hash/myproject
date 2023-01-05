import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {PaginatorModule} from 'primeng/paginator';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TableModule} from 'primeng/table';
import {CardModule} from 'primeng/card';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import {MenubarModule} from 'primeng/menubar';
import {CheckboxModule} from 'primeng/checkbox';
import {CalendarModule} from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RippleModule } from 'primeng/ripple';
//import {MenuItem} from 'primeng/api';
@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PaginatorModule,
    HttpClientModule,
    TableModule,
    CardModule,
    MessagesModule,
    MessageModule,
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule,
    MenubarModule,
    CheckboxModule,
    CalendarModule,
    BrowserAnimationsModule,
    RippleModule
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
