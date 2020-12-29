import { Component, OnInit } from '@angular/core';
import { IntellectService } from '../intellect.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalContentComponentComponent } from './modal-content-component/modal-content-component.component';
import { SwapiService } from 'ng2-swapi';
@Component({
  selector: 'app-admin-landing-page',
  templateUrl: './admin-landing-page.component.html',
  styleUrls: ['./admin-landing-page.component.css']
})
export class AdminLandingPageComponent {

  constructor(public intellectService: IntellectService, private modalService: BsModalService,
    private swapi: SwapiService) { }
  bsModalRef: BsModalRef;


  ngOnInit(): void {
    this.intellectService.peopleList();
    // this.swapi.getPeople(null, false).subscribe((people) => {
    //   console.log('people', people);
    // });
  }
  openModalWithComponent() {
    this.bsModalRef = this.modalService.show(ModalContentComponentComponent, {});
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}
