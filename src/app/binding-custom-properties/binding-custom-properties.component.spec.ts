import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingCustomPropertiesComponent } from './binding-custom-properties.component';

describe('BindingCustomPropertiesComponent', () => {
  let component: BindingCustomPropertiesComponent;
  let fixture: ComponentFixture<BindingCustomPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindingCustomPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingCustomPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
