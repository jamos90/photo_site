import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {
  constructor(private router: Router) {}

  navigateToPath(path: String): void {
    this.router.navigate([path]);
  }

  navigateToPathWithParams(path: String, params: any) {
    this.router.navigate([path], params);
  }
}
