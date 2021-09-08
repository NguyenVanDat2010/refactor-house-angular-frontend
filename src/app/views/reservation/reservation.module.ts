import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateReservationComponent } from './create-reservation/create-reservation.component';
import { EditReservationComponent } from './edit-reservation/edit-reservation.component';
import { ListReservationHouseComponent } from './list-reservation-house/list-reservation-house.component';
import { ListReservationUserComponent } from './list-reservation-user/list-reservation-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ReservationRoutingModule } from './reservation-routing.module';


@NgModule({
  declarations: [CreateReservationComponent, EditReservationComponent, ListReservationHouseComponent, ListReservationUserComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ReservationRoutingModule
  ],
  exports:[]
})
export class ReservationModule { }
