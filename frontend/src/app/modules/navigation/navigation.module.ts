import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { HamburgerMenuIconComponent } from 'src/app/components/partials/hamburger-menu-icon/hamburger-menu-icon.component';

@NgModule({
  declarations: [TopNavComponent, SideNavComponent, HamburgerMenuIconComponent],
  imports: [CommonModule],
  exports: [TopNavComponent, SideNavComponent]
})
export class NavigationModule {}
