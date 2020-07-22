import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrderStatusPage } from './order-status.page';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: OrderStatusPage }])
  ],
  declarations: [OrderStatusPage]
})
export class OrderStatusPageModule {}
