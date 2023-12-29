import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './helpers';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './account/login.component';
import { RegisterComponent } from './account/register.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { CheckmyfriendComponent } from './components/checkmyfriend/checkmyfriend.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { MessagesComponent } from './components/messages/messages.component';

const accountModule = () =>
  import('./account/account.module').then((x) => x.AccountModule);

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactusComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'check-my-friend',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: CheckmyfriendComponent,
      },
      {
        path: 'messages',
        component: MessagesComponent,
      },
    ],
  },
  // {
  //   path: 'aboutus',
  //   children: [
  //     {
  //       path: '',
  //       component: AboutUsComponent,
  //     },
  //     {
  //       path: 'our_employees',
  //       component: OurEmployeesComponent,
  //     },
  //     {
  //       path: 'our_company',
  //       component: OurCompanyComponent,
  //     },
  //   ],
  // },
  { path: 'timeline', component: TimelineComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
