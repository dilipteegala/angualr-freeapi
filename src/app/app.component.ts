import { Component } from '@angular/core';
import{ freeApiService } from './services/freeapi.service';
import {comments} from './Models/comments';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  constructor(private _freeApiService:freeApiService){
  }

  _comments:comments[];

  ngOnInit(){
    this._freeApiService.getcomments()
    .subscribe(
      data=>{
        this._comments = data; 
      }
    );
  }

}
