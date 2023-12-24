import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './helpers';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './account/login.component';
import { RegisterComponent } from './account/register.component';

const accountModule = () =>
  import('./account/account.module').then((x) => x.AccountModule);

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  {
    path: 'products',
    loadChildren: () =>
      import('./products/products.module').then((m) => m.ProductsModule),
    canActivate: [AuthGuard],
  },

  // otherwise redirect to home
  { path: '**', redirectTo: 'products' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
