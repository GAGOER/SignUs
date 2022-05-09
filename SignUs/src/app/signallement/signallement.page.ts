import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signallement',
  templateUrl: './signallement.page.html',
  styleUrls: ['./signallement.page.scss'],
})
export class SignallementPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
