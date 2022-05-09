import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changement-information',
  templateUrl: './changement-information.page.html',
  styleUrls: ['./changement-information.page.scss'],
})
export class ChangementInformationPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
