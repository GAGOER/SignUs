import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recapitulatif-du-signallement',
  templateUrl: './recapitulatif-du-signallement.page.html',
  styleUrls: ['./recapitulatif-du-signallement.page.scss'],
})
export class RecapitulatifDuSignallementPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
