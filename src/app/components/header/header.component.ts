import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'pj-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.dropdown-trigger').dropdown();
    $('.sidenav').sidenav();
    $('.collapsible').collapsible();
  }

}
