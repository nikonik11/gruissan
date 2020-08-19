import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  AppareilName = 'machine à laver';
  status = 'éteint';

  constructor() { }

  ngOnInit(): void {
  }

    getStatus() {
      return this.status;
    }

}
