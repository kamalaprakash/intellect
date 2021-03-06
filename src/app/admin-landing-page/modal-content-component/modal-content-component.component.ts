import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { IntellectService } from '../../intellect.service';
@Component({
  selector: 'app-modal-content-component',
  templateUrl: './modal-content-component.component.html',
  styleUrls: ['./modal-content-component.component.css']
})
export class ModalContentComponentComponent implements OnInit {
  title: string = "Admin Detail Page";
  closeBtnName: string;
  peopleDetail;
  peopleList;
  constructor(private modalService: BsModalService, public bsModalRef: BsModalRef,
    public intellectService: IntellectService) { }

  ngOnInit() {
    this.intellectService.peopleDetailResponse(this.peopleDetail).subscribe((people) => {
      this.peopleList = people;
    });
  }
  closeModal() {
    this.modalService.hide();
  }
  previousData() {
    const urlArray = this.peopleList.url.split('/');
    console.log('previous', urlArray[urlArray.length - 2] - 1);
    this.intellectService.peopleDetailPreviousNext(urlArray[urlArray.length - 2] - 1).subscribe((people) => {
      this.peopleList = people;
    });
  }
  nextData() {
    const urlArray = this.peopleList.url.split('/');
    this.intellectService.peopleDetailPreviousNext(+urlArray[urlArray.length - 2] + 1).subscribe((people) => {
      this.peopleList = people;
    });
  }
}
