import { Component, OnInit, Input } from '@angular/core';
import { Categories } from 'src/app/interfaces/general-interfaces';
import { animationFrame } from 'rxjs/internal/scheduler/animationFrame';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  @Input()
  categoriesArray!: Array<Categories>;

  showMenu: boolean = false;
  menuStyles = {
    width: '3vh',
    height: '0.5vh',
    backgroundColor: 'black',
    margin: '6px 6px'
  };

  constructor() {}

  ngOnInit(): void {}

  toggleMenu() {
    this.showMenu = !this.showMenu;
    console.log('toggling menu', this.showMenu);
  }
}
