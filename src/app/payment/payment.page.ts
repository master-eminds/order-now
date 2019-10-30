import { Component, OnInit } from '@angular/core';
import { ApplePay } from '@ionic-native/apple-pay/ngx';
import { formatDate } from '@angular/common';
const format = 'yyyy-MM-dd';
const locale = 'en-US';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss']
})
export class PaymentPage implements OnInit {
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

  constructor(private applePay: ApplePay) {}
  /**
   *  IF PAYMENT METHOD IS SET DISPLAY CHECKOUT AND ALLOW USER TO PAY
   *  ELSE 
   *  LET USER ADD HIS CARD DETAILS AND THEN PROCEED TO CHECKOUT
   */

  ngOnInit() {
    this.minDate = formatDate(new Date(), format, locale);
    console.log(this.minDate);
    this.applePay
      .canMakePayments()
      .then(message => {
        // Apple Pay is enabled and a supported card is setup. Expect:
        // 'This device can make payments and has a supported card'
        console.log(message);
      })
      .catch(message => {
        // There is an issue, examine the message to see the details, will be:
        // 'This device cannot make payments.''
        // 'This device can make payments but has no supported cards'
        console.log(message);
      });
  }
}
