import { Router } from "@angular/router";
import { AuthService, ApiService } from "./../../services";
import { FormControl } from "@angular/forms";
import { Component } from "@angular/core";
import { debounceTime } from "rxjs/operators";
import { DomController } from "@ionic/angular";

@Component({
  selector: "app-order-status",
  templateUrl: "order-status.page.html",
  styleUrls: ["order-status.page.scss"],
})
export class OrderStatusPage {
  filteredList: any;
  orderList;
  searchControl: FormControl;
  total = 0;
  searching = false;

  constructor(
    private authService: AuthService,
    private apiService: ApiService,
    private domCtrl: DomController,
    private router: Router
  ) {
    this.searchControl = new FormControl();
  }

  ngOnInit() {
    this.apiService.getOrderList().subscribe((res: any) => {
      this.orderList = res.map((order) => {
        this.total += order.quantity * order.price;
        return order;
      });

      this.filterItems("");

      this.searchControl.valueChanges
        .pipe(debounceTime(500))
        .subscribe((search) => {
          this.filterItems(search);
          this.searching = false;
        });
    });
  }

  ionViewWillEnter() {
    this.updateBackground();
  }

  filterItems(searchTerm) {
    this.filteredList = this.orderList.filter((item) => {
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
    this.orderList.forEach((order: any) => {
      this.total += order.cantitate * order.price;
    });
  }

  removeProduct(index) {
    //allow removing if  order is in pending
    this.orderList.splice(index, 1);
    this.changeTotal();
  }

  proceedToPayment() {
    if (
      this.authService.currentUserValue &&
      this.authService.currentUserValue.hasCard
    ) {
      console.log("Select payment way/provider");
    } else {
      this.router.navigate(["/payment"]);
    }
  }

  updateBackground() {
    const content = document.querySelector(".order-page-content");
    const innerScroll = content.shadowRoot.querySelector(".inner-scroll");

    this.domCtrl.write(() => {
      (innerScroll as any).style.background =
        "url('./../../assets/login-wallpaper.jpg') no-repeat center center / cover";
    });
  }
}
