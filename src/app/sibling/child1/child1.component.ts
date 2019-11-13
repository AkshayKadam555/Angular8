import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit {

  name : string;
  constructor(private _sharedService: SharedService ){

  }


  ngOnInit() {
  }

  refresh(){
    this._sharedService.publishData(this.name);
  }

}
