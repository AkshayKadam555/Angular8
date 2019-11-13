import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit, OnDestroy {

private firstObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {
   this.firstObsSubscription =  interval(1000).subscribe(count => {
      console.log(count);
    });
  }

  ngOnDestroy(): void {
      this.firstObsSubscription.unsubscribe();
  }

}
