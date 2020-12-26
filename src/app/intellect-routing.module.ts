import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLandingPageComponent } from './admin-landing-page/admin-landing-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { UserLandingPageComponent } from './user-landing-page/user-landing-page.component';
import { AuthServiceService } from './auth-service.service';

const routes: Routes = [
  { path: '', component: LoginPageComponent, pathMatch: 'full' },
  { path: 'admin-landing-page', component: AdminLandingPageComponent, canActivate: [AuthServiceService] },
  { path: 'user-landing-page', component: UserLandingPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class IntellectRoutingModule { }
