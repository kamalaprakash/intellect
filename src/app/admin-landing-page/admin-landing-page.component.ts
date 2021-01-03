import { Component, OnInit } from '@angular/core';
import { IntellectService } from '../intellect.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalContentComponentComponent } from './modal-content-component/modal-content-component.component';
import { Angular2SwapiService } from 'angular2-swapi';

@Component({
  selector: 'app-admin-landing-page',
  templateUrl: './admin-landing-page.component.html',
  styleUrls: ['./admin-landing-page.component.css']
})
export class AdminLandingPageComponent implements OnInit {

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
    this.bsModalRef = this.modalService.show(ModalContentComponentComponent, { initialState });
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}
