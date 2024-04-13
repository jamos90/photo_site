import { Component, OnInit, Input } from '@angular/core';
import { Categories } from 'src/app/modules/navigation/interfaces/categories';
import { RoutingService } from 'src/app/services/routing/routing.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  @Input()
  categoriesArray!: Array<Categories>;

  constructor(private routingService: RoutingService) {}

  showMenu: boolean = false;
  menuStyles = {
    width: '3vh',
    height: '0.5vh',
    backgroundColor: 'black',
    margin: '6px 6px'
  };

  ngOnInit(): void {}

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  handleCategoryNavigation(categoryCode: String): void {
    this.routingService.navigateToPath(`/categories/${categoryCode}`);
  }
}
