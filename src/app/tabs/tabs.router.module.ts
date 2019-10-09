import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { RestaurantResolver } from './../restaurant-resolver.service';
import { MenuResolver } from '../menu-resolver.service';
const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'restaurants-list',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../restaurants-list/restaurants-list.module').then(m => m.RestaurantsListPageModule)
          }
        ]
      },
      {
        path: 'restaurants-list/details/:id',
        loadChildren: () =>
              import('../details/details.module').then(m => m.DetailsPageModule),
        resolve: {
          restaurant: RestaurantResolver
        }
      },
      {
        path: 'restaurant-menu',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../restaurant-menu/restaurant-menu.module').then(m => m.RestaurantMenuPageModule)
          }
        ]
      },
      {
        path: 'restaurant-menu/menu/:id',
        loadChildren: () =>
              import('../restaurant-menu/menu-products/menu-products.module').then(m => m.MenuProductsPageModule),
        resolve: {
          menu: MenuResolver
        }
      },
      {
        path: 'order-status',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../order-status/order-status.module').then(m => m.OrderStatusPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: 'tabs/restaurans-list',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/restaurants-list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
