import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { RatingModule } from 'primeng/rating';
import { DataViewModule } from 'primeng/dataview';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TagModule } from 'primeng/tag';
@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    DataViewModule,
    RatingModule,
    FormsModule,
    ReactiveFormsModule,
    TagModule,
  ],
})
export class ProductsModule {}
