import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GarageComponent } from './garage/garage.component';
import { GarageDetailsComponent } from './garage/garage-details/garage-details.component';

const routes: Routes = [
  {
    path:'garage',
    component: GarageComponent,
  },
  {
    path:'details/:id',
    component: GarageDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
