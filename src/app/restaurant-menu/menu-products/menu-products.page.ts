import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormControl } from "@angular/forms";
import { debounceTime } from "rxjs/operators";
import { DomController } from '@ionic/angular';

@Component({
  selector: "app-menu-products",
  templateUrl: "./menu-products.page.html",
  styleUrls: ["./menu-products.page.scss"]
})
export class MenuProductsPage implements OnInit {
  menu: any = null;
  products: any;
  filteredProducts: any;
  searching: any = false;
  public searchControl: FormControl;

  constructor(private route: ActivatedRoute, private domCtrl: DomController) {
    this.searchControl = new FormControl();
  }

  ngOnInit() {
    this.route.snapshot.data.menu.menuProducts.map(prod => {
      prod.showDetails = false;
    });
    this.menu = this.route.snapshot.data.menu;
    this.products = this.menu.menuProducts;
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

  updateBackground() {
    const content = document.querySelector('.menu-products-page');
    const innerScroll = content.shadowRoot.querySelector('.inner-scroll');

    this.domCtrl.write(() => {
      (innerScroll as any).style.background = "url('./../../assets/login-wallpaper.jpg') no-repeat center center / cover";
    });
  }

  addProduct(prod) {
    console.log(prod);
  }

  onSearchInput() {
    this.searching = true;
  }

  filterItems(searchTerm) {
    this.filteredProducts = this.products.filter(item => {
      return item.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }
}
