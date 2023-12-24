import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { MessageService } from 'primeng/api';
import { AlertService } from 'src/app/services';
import { ProductService } from '../services/products.service';
import { Product } from '../models/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  form!: FormGroup;
  loading = false;
  submitted = false;
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  products: Product[];
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private productservice: ProductService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.productservice.getAll().subscribe((res: any) => {
      this.products = res.products;
      console.log('res', res);
    });
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      remmeerme: [false],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.loading = true;

    this.productservice.getAll().subscribe((res) => {
      debugger;
      console.log('res', res);
    });
  }
  getSeverity(product: any) {
    switch (product) {
      case 'INSTOCK':
        return 'success';

      case 'LOWSTOCK':
        return 'warning';

      case 'OUTOFSTOCK':
        return 'danger';

      default:
        return null;
    }
  }
}
