import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { RestaurantResolver } from './../restaurant-resolver.service';
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
        path: 'online-order',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../online-order/online-order.module').then(m => m.OnlineOrderPageModule)
          }
        ]
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
