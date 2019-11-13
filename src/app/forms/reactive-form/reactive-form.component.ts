import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
/* import { CustomValidators } from './custom-validator'; */

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

projectForm: FormGroup;

  constructor() { }

  ngOnInit() {
   this.projectForm = new FormGroup({
      'projectName': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl('stable')
    }); 
  }

  onSaveProject() {
    console.log(this.projectForm.value);
  }

}
