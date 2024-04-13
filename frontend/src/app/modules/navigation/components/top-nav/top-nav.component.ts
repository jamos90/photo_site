import { Component, OnInit } from '@angular/core';
import { RoutingService } from 'src/app/services/routing/routing.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  constructor(private routingService: RoutingService) {}

  ngOnInit(): void {}

  navigateHome(): void {
    this.routingService.navigateToPath('/');
  }
}
