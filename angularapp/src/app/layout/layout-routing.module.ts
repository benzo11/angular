import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path:'', component: LayoutComponent,
        children: [
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'orders', loadChildren: './orders/orders.module#OrdersModule' },
            { path: 'reservations', loadChildren: './reservations/reservations.module#ReservationsModule' },
            { path: 'mycatering', loadChildren: './mycatering/mycatering.module#MycateringModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
