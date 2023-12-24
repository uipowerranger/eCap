import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { BadgeModule } from 'primeng/badge';
import { ToastModule } from 'primeng/toast';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { ChartModule } from 'primeng/chart';
import { TooltipModule } from 'primeng/tooltip';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DropdownModule } from 'primeng/dropdown';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { AlertComponent } from './components/alert/alert.component';
import { SutinfoComponent } from './components/sutinfo/sutinfo.component';
import { ChartsdemoComponent } from './components/chartsdemo/chartsdemo.component';
import { TwsListComponent } from './components/tws-list/tws-list.component';
import { TwsTableComponent } from './components/tws-table/tws-table.component';
import {
  ErrorInterceptor,
  JwtInterceptor,
  fakeBackendProvider,
} from './helpers';
import { MessageService } from 'primeng/api';
import { RippleModule } from 'primeng/ripple';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlertComponent,
    SutinfoComponent,
    ChartsdemoComponent,
    TwsListComponent,
    TwsTableComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    ChartModule,
    TooltipModule,
    TableModule,
    BadgeModule,
    ToastModule,
    RippleModule,
    TriStateCheckboxModule,
    AutoCompleteModule,
    BrowserAnimationsModule,
    DropdownModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    MessageService,
    // provider used to create fake backend
    fakeBackendProvider,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
