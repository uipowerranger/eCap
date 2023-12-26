import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { EhomeComponent } from './ehome/ehome.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: '', component: EhomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
