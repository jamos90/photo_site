import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryViewComponent } from './components/category-view/category-view.component';
import { DetailViewComponent } from './components/detail-view/detail-view.component';

@NgModule({
  declarations: [
    CategoryViewComponent,
    DetailViewComponent
  ],
  imports: [CommonModule],
  exports: []
})
export class CategoriesModule {}
