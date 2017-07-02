import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { SidebarLink } from './sidebar';
import { SidebarService } from './sidebar.service';
import { Http,Response } from '@angular/http';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  providers: [SidebarService]

})


export class SidebarComponent implements OnInit{
  sidebarPromise: Promise<SidebarLink[]>
  sidebar: SidebarLink[];

  errorMessage: string;
  private API_URL = 'http://192.168.33.10/api/v1/sidebarLinks';
  constructor(private translate: TranslateService,
              private sidebarservice: SidebarService){
  }

  getSidebarLinks(){
    this.sidebarPromise = this.sidebarservice.getLinksApi();
    this.sidebarPromise.then(
        sidebar => this.sidebar = sidebar,
        error => this.errorMessage=<any>error
    );
    console.log(this.sidebar);
  }
  ngOnInit(): void{
    this.getSidebarLinks();
  }



}
