import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateHouseComponent } from './create-house/create-house.component';
import { ViewHouseComponent } from './view-house/view-house.component';
import { MyHouseComponent } from './my-house/my-house.component';
import { ListHouseUserComponent } from './list-house-user/list-house-user.component';
import { HouseTileComponent } from './house-tile/house-tile.component';


const routes: Routes = [
  {
    path: '',
    component: CreateHouseComponent
  },
  {
    path: 'create',
    component: ViewHouseComponent
  },
  {
    path: '',
    component: MyHouseComponent
  },
  {
    path: 'create',
    component: ListHouseUserComponent
  },
  {
    path: 'create',
    component: HouseTileComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HouseRoutingModule { }
