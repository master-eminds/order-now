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
  },
  {
    id: 4,
    name: 'Cuba Libre',
    price: '21',
    cantitate: 1,
    status: 'pending',
    image: './../../assets/order/cuba.jpg'
  },
  {
    id: 5,
    name: 'Paste Bolognese',
    price: '25',
    cantitate: 2,
    status: 'pending',
    image: './../../assets/order/paste.jpg'
  },
  {
    id: 6,
    name: 'Fanta',
    price: '7',
    cantitate: 3,
    status: 'done',
    image: './../../assets/order/fanta.jpg'
  },
  {
    id: 7,
    name: 'Pizza Polo',
    price: '24',
    cantitate: 1,
    status: 'done',
    image: './../../assets/order/pizza-polo.jpg'
  },
  {
    id: 8,
    name: 'CheeseCake',
    price: '19',
    cantitate: 1,
    status: 'done',
    image: './../../assets/order/cheese.jpg'
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

  incrementQuantity(order) {
    order.cantitate += 1;
    this.changeTotal();
  }

  decrementQuantity(order) {
    if (order.cantitate === 0) {
      return;
    }
    order.cantitate -= 1;
    this.changeTotal();
  }

  changeTotal() {
    this.total = 0;
    orderList.forEach((order: any ) => {
      this.total += order.cantitate * order.price;
    });
  }

}
