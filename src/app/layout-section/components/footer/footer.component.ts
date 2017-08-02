import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  host: {'class': 'app-footer'}
})
export class FooterComponent implements OnInit {
  appYear: number;
  constructor() {
    this.appYear = new Date().getFullYear();
  }

  ngOnInit() {}
}
