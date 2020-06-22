import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingInterceptior } from './routing-interceptor';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
  },
  { path: '', loadChildren: './welcome/welcome.module#WelcomePageModule' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthPageModule' },
  { path: 'menu-products', loadChildren: './restaurant-menu/menu-products/menu-products.module#MenuProductsPageModule' },
  { path: 'payment', loadChildren: './payment/payment.module#PaymentPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
