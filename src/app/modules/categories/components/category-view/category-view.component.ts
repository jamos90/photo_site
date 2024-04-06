import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.scss']
})
export class CategoryViewComponent {
  protected category: String | null = '';

  @Input() images: any = [
    { url: './assets/IMG_6970.jpeg' },
    { url: './assets/IMG_6976.jpeg' },
    { url: './assets/397938_10151112237470058_492932457_n.jpg' },
    { url: './assets/53592_10152223493640058_165711038_o.jpg' },
    { url: './assets/262702_10150680721425058_7322063_n.jpg' },
    { url: './assets/339782_10151133670150058_1940421845_o.jpg' },
    { url: './assets/394721_10151112234690058_1895319742_n.jpg' },
    { url: './assets/29101657_10160094666705058_3170800344036802560_n.jpg' },
    { url: './assets/1052235_10152982851815058_1855764683_o.jpg' }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.category = this.route.snapshot.paramMap.get('id');
    this.test();
  }

  test(): void {
    console.log('Im this', this);
  }
}
