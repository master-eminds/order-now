import { FadeComponent } from './../fade/fade.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuProductsPage } from './menu-products.page';

const routes: Routes = [
  {
    path: '',
    component: MenuProductsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  exports : [FadeComponent],
  declarations: [MenuProductsPage, FadeComponent]
})
export class MenuProductsPageModule {}
