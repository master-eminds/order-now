import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl
} from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
const format = 'yyyy-MM-dd';
const locale = 'en-US';

function cardValidator(c: AbstractControl): { [key: string]: boolean } | null {
  const cardno = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
  if (c.value && !c.value.match(cardno)) {
    return { card: true};
  } else {
    return null;
  }

  //create an async validator using backend check
}
@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss']
})
export class PaymentPage implements OnInit {
  paymentForm: FormGroup;
  minDate = '';
  cardMessage: string;
  monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec'
  ];
  private validationMessages = {
    required: 'Please enter your card number.',
    card: 'Please enter a valid card.'
  };

  constructor(private fb: FormBuilder) {}
  /**
   *  IF PAYMENT METHOD IS SET DISPLAY CHECKOUT AND ALLOW USER TO PAY
   *  ELSE
   *  LET USER ADD HIS CARD DETAILS AND THEN PROCEED TO CHECKOUT
   */

  ngOnInit() {
    this.minDate = formatDate(new Date(), format, locale);
    console.log(this.minDate);
    this.paymentForm = this.fb.group({
      card_holder: ['', Validators.required],
      card_number: ['', [Validators.required, cardValidator]],
      card_expiration_date: ['', [Validators.required]],
      card_cvc: [
        '',
        [Validators.required, Validators.minLength(3), Validators.maxLength(3)]
      ]
    });

    const card_number = this.paymentForm.get('card_number');
    card_number.valueChanges.pipe(debounceTime(1000)).subscribe(res => {
      this.setMessage(card_number);
    });
  }

  setMessage(c) {
    this.cardMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.cardMessage = Object.keys(c.errors).map(
        key => this.validationMessages[key]).join(' ');
    }
  }
}
