import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulaire-envoyer',
  templateUrl: './formulaire-envoyer.page.html',
  styleUrls: ['./formulaire-envoyer.page.scss'],
})
export class FormulaireEnvoyerPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
