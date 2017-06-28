import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationsComponent } from './reservations/reservations.component';
import { ReservationRouting } from './reservations-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReservationRouting
  ],
  declarations: [ReservationsComponent]
})
export class ReservationsModule { }
