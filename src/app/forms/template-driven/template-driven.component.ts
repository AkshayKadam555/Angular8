import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent implements OnInit {

  genders = ['male', 'female'];

user = {
  username: '',
  email: ''
};

submitted = false;

 /*  @ViewChild('f') signupForm: NgForm; */
  constructor() { }

  ngOnInit() {
  }


/*   onSubmit(form: NgForm)
  {
    console.log(form);
  } */

/* onSubmit() {
  console.log(this.signupForm);
} */
/* suggestUserName() {
  const suggestedName = 'superuser';
this.signupForm.form.patchValue({
  userData: {
    username: suggestedName 
  }
});
}

 onSubmit() {
  this.submitted = true;
  this.user.username = this.signupForm.value.userData.username;
  this.user.email = this.signupForm.value.userData.email; 
} */

}
