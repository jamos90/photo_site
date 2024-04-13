import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryViewComponent } from './components/category-view/category-view.component';

const routes: Routes = [
  {
    path: '',
    component: CategoryViewComponent,
    children: [{ path: 'categories/:id', component: CategoryViewComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule {}
