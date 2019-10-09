import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-products',
  templateUrl: './menu-products.page.html',
  styleUrls: ['./menu-products.page.scss'],
})
export class MenuProductsPage implements OnInit {
  menu: any = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.snapshot.data.menu.menuProducts.map(prod => {
      prod.showDetails = false;
    });
    this.menu = this.route.snapshot.data.menu;
  }

  addProduct(prod) {
    console.log(prod);
  }

}
