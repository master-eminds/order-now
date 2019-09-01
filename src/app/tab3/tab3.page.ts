import { Component } from '@angular/core';

const orderList = [
  {
    id: 0,
    name: 'Bere Heineken',
    price: '7',
    cantitate: 2,
    status: 'done',
    image: './../../assets/order/beer.jpg'
  },
  {
    id: 1,
    name: 'Pizza quatro formaggi',
    price: '27',
    cantitate: 1,
    status: 'pending',
    image: './../../assets/order/pizza.jpg'
  },
  {
    id: 2,
    name: 'Clatite',
    price: '18',
    cantitate: 2,
    status: 'pending',
    image: './../../assets/order/clatite.jpg'
  },
  {
    id: 3,
    name: 'Mojito',
    price: '27',
    cantitate: 1,
    status: 'done',
    image: './../../assets/order/mojito.jpg'
  }
];
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  orderList = orderList;
  total = 0;
  constructor() {
    orderList.forEach((order: any ) => {
      this.total += order.cantitate * order.price;
    });
  }

}
