import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changement-de-mot-passe',
  templateUrl: './changement-de-mot-passe.page.html',
  styleUrls: ['./changement-de-mot-passe.page.scss'],
})
export class ChangementDeMotPassePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
