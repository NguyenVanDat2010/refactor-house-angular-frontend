import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateReservationComponent } from './create-reservation/create-reservation.component';
import { EditReservationComponent } from './edit-reservation/edit-reservation.component';
import { ListReservationHouseComponent } from './list-reservation-house/list-reservation-house.component';
import { ListReservationUserComponent } from './list-reservation-user/list-reservation-user.component';



const routes: Routes = [
  {
    path: '',
    component: CreateReservationComponent
  },
  {
    path: 'create',
    component: EditReservationComponent
  },
  {
    path: '',
    component: ListReservationHouseComponent
  },
  {
    path: 'create',
    component: ListReservationUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationRoutingModule { }
