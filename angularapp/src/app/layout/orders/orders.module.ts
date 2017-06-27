import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersGridComponent } from './orders-grid/orders-grid.component';
import { OrdersRoutingModule } from './orders-grid-routing.module';

@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule
  ],
  declarations: [OrdersGridComponent]
})
export class OrdersModule { }
