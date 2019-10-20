import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-menu-products",
  templateUrl: "./menu-products.page.html",
  styleUrls: ["./menu-products.page.scss"]
})
export class MenuProductsPage implements OnInit {
  menu: any = null;
  searchTerm = '';
  products: any;
  filteredProducts: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.snapshot.data.menu.menuProducts.map(prod => {
      prod.showDetails = false;
    });
    this.menu = this.route.snapshot.data.menu;
    this.products = this.menu.menuProducts;
    this.filterItems(this.searchTerm);
  }

  addProduct(prod) {
    console.log(prod);
  }

  filterItems(searchTerm) {
    this.filteredProducts = this.products.filter(item => {
      return item.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }
}
