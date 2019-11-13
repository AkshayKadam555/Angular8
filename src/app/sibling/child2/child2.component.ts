import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements OnInit {

  name : string;


  ngOnInit() {
  }

  constructor(private _sharedService : SharedService){

/*     this._sharedService.name$.subscribe( data => {
          this.name = data;
      }); */
/* console.log("shared", this._sharedService); */

      this._sharedService.name$.subscribe( data => {
        this.name = data;
      });
  }



}
