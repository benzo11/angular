import { NgModule } from '@angular/core';
import { OrdersGridComponent } from './orders-grid/orders-grid.component';
import { OrdersRoutingModule } from './orders-grid-routing.module';



@NgModule({
  imports: [
    OrdersRoutingModule
  ],
  declarations: [OrdersGridComponent]
})
export class OrdersModule { }
