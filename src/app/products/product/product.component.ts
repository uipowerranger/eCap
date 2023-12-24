import { Component, Input } from '@angular/core';
import { SelectItem } from 'primeng/api/selectitem';
import { Product } from 'src/app/models/products';
import { ProductService } from 'src/app/services/products.service';
import { AccountService, AlertService } from 'src/app/services';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  sortOptions!: SelectItem[];
  layout: string = 'list';

  sortOrder!: number;

  sortField!: string;

  products!: Product[];

  constructor(
    private prodService: ProductService,
    private alertService: AlertService
  ) {}
  @Input() product: any;
  ngOnInit() {
    this.sortOptions = [
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' },
    ];
    console.log(this.product);
  }
  onSortChange(event: any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  getSeverity(product: Product) {
    switch (product.stock) {
      case 'INSTOCK':
        return 'success';

      case 'LOWSTOCK':
        return 'warning';

      case 'OUTOFSTOCK':
        return 'danger';

      default:
        return '';
    }
  }
  addtoCart(product: Product) {
    this.prodService.setProduct(product);
    this.alertService.success(`${product.title} Added`, undefined, false);
  }
}
