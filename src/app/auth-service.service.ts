import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRoute
} from '@angular/router';
import { IntellectService } from './intellect.service';
import { UserDetail } from './userDetail';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService implements CanActivate {
  isAdmin: boolean;
  constructor(public activatedRoute: ActivatedRoute, public router: Router,
    public intellectService: IntellectService) { }
  canActivate(): boolean {
    if (this.intellectService.currentUser) {
      const loggedinUser: UserDetail = this.intellectService.currentUser.find((role) => role.username == localStorage.getItem('username'));
      if (loggedinUser && loggedinUser.role !== 'admin') {
        this.router.navigate(['user-landing-page']);
        this.isAdmin = false;
      } else {
        this.isAdmin = true;
      }
      return this.isAdmin;
    }
  }
}
