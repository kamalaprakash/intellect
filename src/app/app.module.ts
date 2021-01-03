import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardActions, MatCardContent, MatCardHeader, MatCardModule, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { IntellectRoutingModule } from './intellect-routing.module';
import { IntellectService } from './intellect.service';
import { HttpClientModule } from '@angular/common/http';
import { UserLandingPageComponent } from './user-landing-page/user-landing-page.component';
import { AdminLandingPageComponent } from './admin-landing-page/admin-landing-page.component';
import { AuthServiceService } from './auth-service.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalContentComponentComponent } from './admin-landing-page/modal-content-component/modal-content-component.component';
import { Angular2SwapiModule } from 'angular2-swapi';
import { UserDetailPageComponent } from './user-landing-page/user-detail-page/user-detail-page.component';
// import { SwapiService } from 'ng2-swapi';
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    AdminLandingPageComponent, UserLandingPageComponent,
    ModalContentComponentComponent, ModalContentComponentComponent, UserDetailPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    Angular2SwapiModule,
    ReactiveFormsModule,
    IntellectRoutingModule,
    ModalModule.forRoot(),
    HttpClientModule
  ],
  entryComponents: [ModalContentComponentComponent],
  providers: [IntellectService, AuthServiceService, BsModalRef],
  bootstrap: [AppComponent]
})
export class AppModule { }
