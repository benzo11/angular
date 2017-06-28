import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MycateringComponent } from './mycatering/mycatering.component';
import { MyCateringRouting } from './mycatering-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MyCateringRouting
  ],
  declarations: [MycateringComponent]
})
export class MycateringModule { }
