import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersGridComponent } from './orders-grid/orders-grid.component';

const routes: Routes = [
    { path: '', component: OrdersGridComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OrdersRoutingModule { }
