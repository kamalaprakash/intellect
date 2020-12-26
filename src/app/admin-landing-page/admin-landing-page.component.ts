import { Component, OnInit } from '@angular/core';
import { IntellectService } from '../intellect.service';

@Component({
  selector: 'app-admin-landing-page',
  templateUrl: './admin-landing-page.component.html',
  styleUrls: ['./admin-landing-page.component.css']
})
export class AdminLandingPageComponent implements OnInit {

  constructor(public intellectService: IntellectService) { }

  ngOnInit(): void {
    this.intellectService.peopleList();
  }
  openDetailPopup() {

  }
}
