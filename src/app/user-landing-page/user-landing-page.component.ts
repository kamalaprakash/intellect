import { Component, OnInit } from '@angular/core';
import { IntellectService } from '../intellect.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Angular2SwapiService } from 'angular2-swapi';
import { UserDetailPageComponent } from './user-detail-page/user-detail-page.component';

@Component({
  selector: 'app-user-landing-page',
  templateUrl: './user-landing-page.component.html',
  styleUrls: ['./user-landing-page.component.css']
})
export class UserLandingPageComponent implements OnInit {
  constructor(public intellectService: IntellectService, private modalService: BsModalService,
    private _swapi: Angular2SwapiService) { }
  bsModalRef: BsModalRef;
  peopleData;
  ngOnInit(): void {
    this.intellectService.peopleList().subscribe((people) => {
      this.peopleData = people;
    });
  }
  openModalWithComponent(peopleDetail) {
    const initialState = {
      peopleDetail: peopleDetail
    };
    this.bsModalRef = this.modalService.show(UserDetailPageComponent, { initialState });
    this.bsModalRef.content.closeBtnName = 'Close';
  }

}
