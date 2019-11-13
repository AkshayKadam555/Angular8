import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input('parentData') public name;
  @Output() public childevent = new EventEmitter();
  
    constructor() { }
  
    ngOnInit() {
    }
  
    fireEvent() {
      this.childevent.emit('Hey I am here');
    }

}
