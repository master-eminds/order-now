import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingInterceptior } from './routing-interceptor';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate : [RoutingInterceptior]
  },
  { path: '', loadChildren: './welcome/welcome.module#WelcomePageModule' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
