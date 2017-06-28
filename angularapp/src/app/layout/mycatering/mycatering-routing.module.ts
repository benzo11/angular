import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MycateringComponent } from './mycatering/mycatering.component';

const routes: Routes = [
    { path: '', component: MycateringComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MyCateringRouting { }
