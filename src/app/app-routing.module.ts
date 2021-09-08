import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './views/layout/layout.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'auth',
        loadChildren:() => import('./views/auth/auth.module').then(a => a.AuthModule)
      },
      {
        path: 'houses',
        loadChildren: () => import('./views/house/house.module').then(h => h.HouseModule)
      },
      {
        path: 'reservations',
        loadChildren: () => import('./views/reservation/reservation.module').then(r => r.ReservationModule)
      },
      {
        path: 'users',
        loadChildren: () => import('./views/user/user.module').then(u => u.UserModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
