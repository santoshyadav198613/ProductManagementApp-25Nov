import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';

import { cardValidtor } from '../custom/card.validator';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.customerForm = this.fb.group({
      id: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      dob: new FormControl('', [Validators.required]),
      address: this.fb.group({
        addressLine1: new FormControl('', [Validators.required]),
        addressLine2: new FormControl('', []),
        city: new FormControl('', [Validators.required]),
        state: new FormControl('', [Validators.required])
      }),
      cards: this.fb.array([
        this.builForm()
      ])
    });
  }

  builForm() {
    return this.fb.group(
      {
        cardNumber: new FormControl('', [Validators.required, cardValidtor]),
        expiryMonth: new FormControl('', [Validators.required]),
        expiryYear: new FormControl('', [Validators.required]),
        cvv: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(3)]),
      }
    );
  }

  addCard() {
    let card = this.customerForm.controls['cards'] as FormArray;
    card.push(this.builForm());
  }

  remmoveCard(i: number) {
    let card = this.customerForm.controls['cards'] as FormArray;
    card.removeAt(i);
  }

  saveCustomer() {
    console.log(this.customerForm.value);
    // this.customerForm.reset(); -- to be checked 
  }

}
