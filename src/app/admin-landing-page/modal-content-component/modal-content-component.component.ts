import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-content-component',
  templateUrl: './modal-content-component.component.html',
  styleUrls: ['./modal-content-component.component.css']
})
export class ModalContentComponentComponent implements OnInit {
  title: string = "Detaail Page";
  closeBtnName: string;
  list: any[] = [];

  constructor() { }

  ngOnInit() {
    this.list.push('kamal', 'vimal', 'raja');
  }
}
