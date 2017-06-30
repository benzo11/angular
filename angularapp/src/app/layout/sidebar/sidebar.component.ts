import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';



export class SidebarLink {
  id: number;
  translation: string;
  link:string;
  icon:string;
}
//TODO: create service and get sidebar infos
const LINKS: SidebarLink[] = [
  { id: 1, translation:'dashboard',link:'/dashboard',icon:'fa fa-fw fa-dashboard' },
  { id: 2, translation:'orders',link:'/orders',icon:'fa fa-fw fa-bar-chart-o' },
  { id: 3, translation:'reservations',link:'/reservations',icon:'fa fa-fw fa-table' },
  { id: 4, translation:'mycetering',link:'/mycatering',icon:'fa fa-fw fa-table' }

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']

})


export class SidebarComponent {
  sidebarlinks = LINKS;
  constructor(private translate: TranslateService){
  }

  ngOnInit() {
  }

}
