import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './modules/home-page/components/landing-page/landing-page.component';
import { CategoryViewComponent } from './modules/categories/components/category-view/category-view.component';
import { CategoriesModule } from './modules/categories/categories.module';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: LandingPageComponent },
  {
    path: 'category',
    loadChildren: () =>
      import('./modules/categories/categories.module').then(
        m => m.CategoriesModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
