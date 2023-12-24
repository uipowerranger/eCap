import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { RatingModule } from 'primeng/rating';
import { DataViewModule } from 'primeng/dataview';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TagModule } from 'primeng/tag';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { ProductComponent } from './product/product.component';
import { BadgeModule } from 'primeng/badge';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  declarations: [ProductsComponent, ProductComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    DataViewModule,
    RatingModule,
    FormsModule,
    ReactiveFormsModule,
    TagModule,
    DropdownModule,
    ButtonModule,
    BadgeModule,
  ],
})
export class ProductsModule {}
