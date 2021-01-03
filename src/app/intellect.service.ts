import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDetail } from './userDetail';

@Injectable({
  providedIn: 'root'
})

export class IntellectService {
  currentUser: UserDetail[];
  constructor(private httpClient: HttpClient) { }
  userrole() {
    this.httpClient.get("./assets/role.json").subscribe((userRole: UserDetail[]) => {
      this.currentUser = userRole;
    });
  }
  peopleList() {
    return this.httpClient.get("https://swapi.dev/api/people");
  }
  peopleDetailResponse(req) {
    return this.httpClient.get(req);
  }
  peopleDetailPreviousNext(index) {
    return this.httpClient.get("https://swapi.dev/api/people/" + index);
  }

}