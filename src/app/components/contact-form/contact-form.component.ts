import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

import { minAgeValidator } from '../../shared/validators/minAgeValidator';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

const phoneOrEmailValidator = (c: AbstractControl) => {
  if (String(c.get('email').value).length === 0 && String(c.get('phone').value).length === 0) {
    return { phoneOrEmailRequired: true }
  }
  return null;
}

const colorNameAsyncValidator = (httpClient: HttpClient) => (c: AbstractControl) => {
  return httpClient.get<any[]>('http://localhost:4250/colors?name=' + c.value)
  .pipe(
    map(colors => colors.length === 1 ? null : ({ colorName: true }))
  );
};

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private httpClient: HttpClient) { }

  get nameValid() {
    const c = this.contactForm.get('name');
    return c.errors.required && c.touched;
  }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: [ '', { validators: [ Validators.required ] } ],
      age: [ 0, { validators: [ Validators.required, minAgeValidator(13) ] } ],
      phone: '',
      email: '',
      color: [ '', { asyncValidators: [ colorNameAsyncValidator(this.httpClient) ] } ],
    }, { validators: [ phoneOrEmailValidator ] })
  }

}
