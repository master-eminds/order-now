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
        path: 'RestaurantsList',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../restaurants-list/restaurants-list.module').then(m => m.RestaurantsListPageModule)
          }
        ]
      },
      {
        path: 'RestaurantsList/details/:id',
        loadChildren: () =>
              import('../details/details.module').then(m => m.DetailsPageModule),
        resolve: {
          restaurant: RestaurantResolver
        }
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../online-order/online-order.module').then(m => m.OnlineOrderPageModule)
          }
        ]
      },
      {
        path: 'tab3',
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
        redirectTo: 'tabs/RestaurantsList',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/RestaurantsList',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
