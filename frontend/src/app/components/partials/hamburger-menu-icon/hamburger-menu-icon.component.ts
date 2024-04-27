import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hamburger-menu-icon',
  templateUrl: './hamburger-menu-icon.component.html',
  styleUrls: ['./hamburger-menu-icon.component.scss']
})
export class HamburgerMenuIconComponent implements OnInit {
  @Input() menuStyles: any = {};

  constructor() {}

  ngOnInit(): void {}
}
