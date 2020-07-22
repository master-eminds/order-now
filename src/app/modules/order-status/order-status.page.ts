import { Router } from '@angular/router';
import { AuthService } from './../../services';
import { FormControl } from '@angular/forms';
import { Component } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { DomController } from '@ionic/angular';

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
  selector: 'app-order-status',
  templateUrl: 'order-status.page.html',
  styleUrls: ['order-status.page.scss']
})
export class OrderStatusPage {
  orderList = orderList;
  filteredList: any;
  searchControl: FormControl;
  total = 0;
  searching = false;

  constructor(private authService: AuthService,
              private domCtrl: DomController,
              private router: Router) {
    orderList.forEach((order: any ) => {
      this.total += order.cantitate * order.price;
    });
    this.searchControl = new FormControl();
  }

  ngOnInit() {
    this.filterItems('');

    this.searchControl.valueChanges
      .pipe(debounceTime(500))
      .subscribe(search => {
        this.filterItems(search);
        this.searching = false;
      });
  }

  ionViewWillEnter() {
    this.updateBackground();
  }

  filterItems(searchTerm) {
    this.filteredList = this.orderList.filter(item => {
      return item.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }

  onSearchInput() {
    this.searching = true;
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

  removeProduct(index) {
    //allow removing if  order is in pending
    this.orderList.splice(index, 1);
    this.changeTotal();
  }

  proceedToPayment() {
    if (this.authService.currentUserValue && this.authService.currentUserValue.hasCard) {
      console.log('Select payment way/provider');
    }  else {
      this.router.navigate(['/payment']);
    }
  }

  updateBackground() {
    const content = document.querySelector('.order-page-content');
    const innerScroll = content.shadowRoot.querySelector('.inner-scroll');

    this.domCtrl.write(() => {
      (innerScroll as any).style.background = "url('./../../assets/login-wallpaper.jpg') no-repeat center center / cover";
    });
  }

}
