import { Component } from '@angular/core';
import { freeApiService } from './services/freeapi.service';
import { comments } from './classes/comments';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BHS';
  todayISOString : string = new Date().toISOString();
  constructor(private _freeApiService:freeApiService){

  }
lstcomments:comments[];

  ngOnInit(){
    this._freeApiService.getcomments()
    .subscribe(
      data=>{
          this.lstcomments=data;
      }
    )
  }
}
