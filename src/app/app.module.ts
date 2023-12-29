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
import { OverlayPanelModule } from 'primeng/overlaypanel';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { AlertComponent } from './components/alert/alert.component';
import {
  ErrorInterceptor,
  JwtInterceptor,
  fakeBackendProvider,
} from './helpers';
import { MessageService } from 'primeng/api';
import { RippleModule } from 'primeng/ripple';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { CartListComponent } from './products/cart-list/cart-list.component';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { PosterComponent } from './components/poster/poster.component';
import { FooterComponent } from './components/footer/footer.component';
import { SigninComponent } from './components/signin/signin.component';
import { BrandComponent } from './components/brand/brand.component';
import { SocialHerdComponent } from './components/social-herd/social-herd.component';
import { SocialIconsComponent } from './components/social-icons/social-icons.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { ContactusFormComponent } from './components/contactus-form/contactus-form.component';
import { CheckmyfriendComponent } from './components/checkmyfriend/checkmyfriend.component';
import { FollowfriendComponent } from './components/followfriend/followfriend.component';
import { FriendCard } from './components/friendcard/friendcard.component';
import { LoggedprofileComponent } from './components/loggedprofile/loggedprofile.component';
import { UsericoncircleComponent } from './components/usericoncircle/usericoncircle.component';
import { MenuComponent } from './components/menu/menu.component';
import { PostpublishComponent } from './components/postpublish/postpublish.component';
import { TimelineheaderComponent } from './components/timelineheader/timelineheader.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { TimelinepostComponent } from './components/timelinepost/timelinepost.component';
import { TimelinefollowComponent } from './components/timelinefollow/timelinefollow.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlertComponent,
    LoginComponent,
    HeaderComponent,
    CartListComponent,
    PosterComponent,
    FooterComponent,
    SigninComponent,
    BrandComponent,
    SocialHerdComponent,
    SocialIconsComponent,
    ContactusComponent,
    ContactusFormComponent,
    FriendCard,
    CheckmyfriendComponent,
    FollowfriendComponent,
    LoggedprofileComponent,
    UsericoncircleComponent,
    MenuComponent,
    PostpublishComponent,
    TimelineheaderComponent,
    TimelineComponent,
    TimelinepostComponent,
    TimelinefollowComponent,
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
    ButtonModule,
    OverlayPanelModule,
    MenubarModule,
    NgbModule,
    NgbCollapseModule,
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
