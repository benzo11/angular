import { Component, OnInit } from '@angular/core';
import { trigger, state, animate, transition, style } from '@angular/animations';


@Component({
  selector: 'app-orders-grid',
  templateUrl: './orders-grid.component.html',
  styleUrls: ['./orders-grid.component.css'],
  animations: [
    trigger("fadeInOut", [
      state("open", style({opacity: 1})),
      state("closed", style({opacity: 0})),
      transition("open <=> closed", animate( "3000ms" )),
    ])
  ],

})
export class OrdersGridComponent implements OnInit {
  state = 'closed';
  timeOutRef;

  beginAnim() {
    // toggle state to kickstart animation

  }
  constructor() { }

  ngOnInit() {
    this.state = this.state;
  }

}
