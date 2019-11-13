import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private name = new Subject<string>(); 
  public name$ = this.name.asObservable();

  publishData(data: string) {
    this.name.next(data);
  }
  constructor() { }
}
