import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonComponent } from './person/person.component';
import { CarComponent } from './car/car.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HardwareComponent } from './hardware/hardware.component';

const routes: Routes = [
  {
    path: 'person',
    component: PersonComponent
  },
  {
    path:'car',
    component: CarComponent,
  },
  {
    path: 'navi',
    component: NavigationComponent
  },
  {
    path:'hardware',
    component: HardwareComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
