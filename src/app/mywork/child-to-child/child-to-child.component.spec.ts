import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildToChildComponent } from './child-to-child.component';

describe('ChildToChildComponent', () => {
  let component: ChildToChildComponent;
  let fixture: ComponentFixture<ChildToChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildToChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildToChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
