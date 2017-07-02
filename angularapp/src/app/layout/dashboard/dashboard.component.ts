import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { SidebarLink } from '../sidebar/sidebar';
import { SidebarService } from '../sidebar/sidebar.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [SidebarService]
})
export class DashboardComponent implements OnInit {
  myForm: FormGroup;
  post:any;
  translation: FormControl;
  link: FormControl;
  icon: FormControl;
  sidebar: SidebarLink[];
  sidebarPromise: Promise<SidebarLink[]>;
  errorMessage: string;

  constructor(private builder: FormBuilder,
              private sidebarservice: SidebarService) {

  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }
  onSubmit(){
    if (this.myForm.valid) {
      //this.myForm.reset();
      this.sidebarPromise = this.sidebarservice.addLinkApi();
      this.sidebarPromise.then(
          sidebar => this.sidebar = sidebar,
          error => this.errorMessage=<any>error
      );
      console.log(this.translation.value);
    }
  }
  createFormControls() {
    this.translation = new FormControl('', Validators.required);
    this.link = new FormControl('', Validators.required);
    this.icon = new FormControl('', Validators.required);
  }

  createForm(){
    this.myForm = new FormGroup({
      translation: this.translation,
      icon: this.icon,
      link: this.link
    });
  }

}
