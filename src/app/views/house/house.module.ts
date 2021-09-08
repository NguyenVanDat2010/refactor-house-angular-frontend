import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateHouseComponent } from './create-house/create-house.component';
import { ViewHouseComponent } from './view-house/view-house.component';
import { MyHouseComponent } from './my-house/my-house.component';
import { ListHouseUserComponent } from './list-house-user/list-house-user.component';
import { HouseTileComponent } from './house-tile/house-tile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HouseRoutingModule } from './house-routing.module';


@NgModule({
  declarations: [CreateHouseComponent, ViewHouseComponent, MyHouseComponent, ListHouseUserComponent, HouseTileComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HouseRoutingModule
  ],
  exports:[]
})
export class HouseModule { }
