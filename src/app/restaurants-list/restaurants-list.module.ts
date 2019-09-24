import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RestaurantsListPage } from './restaurants-list.page';
import { IonicRatingModule } from 'ionic4-rating';
import { TruncateModule } from '@yellowspot/ng-truncate';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    IonicRatingModule,
    TruncateModule,
    RouterModule.forChild([{ path: '', component: RestaurantsListPage }])
  ],
  declarations: [RestaurantsListPage]
})
export class RestaurantsListPageModule {
}
