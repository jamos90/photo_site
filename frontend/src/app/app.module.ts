import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageModuleModule } from './modules/home-page/home-page-module.module';
import { NavigationModule } from './modules/navigation/navigation.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { CategoriesRoutingModule } from './modules/categories/categories-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomePageModuleModule,
    NavigationModule,
    CategoriesModule,
    CategoriesRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
