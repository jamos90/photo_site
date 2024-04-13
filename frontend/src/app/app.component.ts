import { Component } from '@angular/core';
import { Categories } from './modules/navigation/interfaces/categories';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jamos-photography';
  categoriesArray: Array<Categories> = [
    {
      title: 'Landscape',
      code: 'landscape',
      path: '/landscape'
    },
    {
      title: 'Portrait',
      code: 'portrait',
      path: '/portrait'
    },
    {
      title: 'Fashion',
      code: 'fashion',
      path: '/fashion'
    },
    {
      title: 'Long exposure',
      code: 'longexposure',
      path: '/longexposure'
    }
  ];
}
