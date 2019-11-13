import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.scss']
})
export class LifecycleHooksComponent implements OnInit, OnChanges {

  constructor() { 
    console.log('constructor called');
  }

  ngOnChanges()
  {
      console.log('ngOnChanges Called');
  }

  ngOnInit() {
    console.log('ngoninit called');
  }

  ngAfterContentInit()
  {
    console.log('ngAfterContentInit called');
  }

  ngAfterContentChecked()
  {
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit()
  {
    console.log('ngAfterViewInit called');
  } 
 
  ngAfterViewChecked()
  {
    console.log('ngAfter called');
  }
}
