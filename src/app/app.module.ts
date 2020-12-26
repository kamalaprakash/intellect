import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardActions, MatCardContent, MatCardHeader, MatCardModule, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { IntellectRoutingModule } from './intellect-routing.module';
import { IntellectService } from './intellect.service';
import { HttpClientModule } from '@angular/common/http';
import { UserLandingPageComponent } from './user-landing-page/user-landing-page.component';
import { AdminLandingPageComponent } from './admin-landing-page/admin-landing-page.component';
import { AuthServiceService } from './auth-service.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    AdminLandingPageComponent,
    UserLandingPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatCardActions,
    IntellectRoutingModule,
    HttpClientModule
  ],
  providers: [IntellectService, AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
