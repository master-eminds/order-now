import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
const format = 'yyyy-MM-dd';
const locale = 'en-US';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss']
})
export class PaymentPage implements OnInit {
  paymentForm: FormGroup;
  minDate = '';
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
      card_number: ['', [Validators.required, Validators.minLength(13), Validators.maxLength(13)]],
      card_expiration_date: ['', [Validators.required]],
      card_cvc: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(3)]]
    });

    const card_number = this.paymentForm.get('card_number');
    card_number.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe((res) => {
      console.log(res);
    });

  }
}
