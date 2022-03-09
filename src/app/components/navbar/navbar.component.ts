import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TAB_MAPPER } from './navbar.constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  tabs = TAB_MAPPER;

  constructor(public router: Router) {}
}
