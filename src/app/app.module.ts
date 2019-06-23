import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import{ freeApiService } from './services/freeapi.service';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule
                ,HttpClientModule ],
  declarations: [ AppComponent, HelloComponent ],
  providers:  [freeApiService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
