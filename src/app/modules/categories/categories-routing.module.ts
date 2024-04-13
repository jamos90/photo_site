import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryViewComponent } from './components/category-view/category-view.component';
import { DetailViewComponent } from './components/detail-view/detail-view.component';

const routes: Routes = [
  {
    path: 'categories/:id',
    component: CategoryViewComponent
  },
  {
    path: 'categories/:id/:imageId',
    component: DetailViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule {}
