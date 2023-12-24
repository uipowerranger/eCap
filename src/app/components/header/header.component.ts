import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models';
import { Product } from 'src/app/models/products';
import { AccountService } from 'src/app/services';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  simpleContent = 'S';
  overlap = true;
  disabled = true;
  user?: User | null;
  displayCartBox: boolean = false;
  selectedProduct: Product[] = [];

  constructor(
    private accountService: AccountService,
    private prodService: ProductService
  ) {
    this.accountService.user.subscribe((x) => (this.user = x));
  }
  displayCart() {
    this.displayCartBox = true;
  }

  logout() {
    this.accountService.logout();
  }
  deleteItem(event: any) {
    alert('deleted');
  }
  ngOnInit(): void {
    this.prodService.selectedProduct$.subscribe((value) => {
      this.selectedProduct.push(value);
    });
  }
}
