import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models';
import { Product } from 'src/app/models/products';
import { AccountService } from 'src/app/services';
import { ProductService } from 'src/app/services/products.service';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  // standalone: true,
  // imports: [NgbCollapseModule, RouterLink],
})
export class HeaderComponent implements OnInit {
  simpleContent = 'S';
  overlap = true;
  disabled = true;
  user?: User | null;
  displayCartBox: boolean = false;
  selectedProduct: Product[] = [];
  isMenuCollapsed = true;
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
    const count = {};

    this.prodService.selectedProduct$.subscribe((value) => {
      console.log('Shared ', value);

      this.selectedProduct.push(value);
    });
  }
}
