import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingInterceptior } from './interceptors/routing-interceptor';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./modules/tabs/tabs.module').then(m => m.TabsPageModule),
  },
  { path: '', loadChildren: './modules/welcome/welcome.module#WelcomePageModule' },
  { path: 'auth', loadChildren: './modules/auth/auth.module#AuthPageModule' },
  { path: 'menu-products', loadChildren: './modules/restaurant-menu/menu-products/menu-products.module#MenuProductsPageModule' },
  { path: 'payment', loadChildren: './modules/payment/payment.module#PaymentPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
