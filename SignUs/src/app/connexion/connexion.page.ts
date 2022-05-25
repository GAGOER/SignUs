import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {
  email
  password
  token
  constructor(private router: Router) { }

  ngOnInit() {
  }
  connexion() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "identifier": this.email,
      "password": this.password
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,

    };

    fetch("http://localhost:1337/api/auth/local", requestOptions)
      .then(response => response.json())
      .then((result) => {
        this.token = result

        if (this.token.jwt) {
          this.navigate()

        }
      })
      .catch(error => console.log('error', error));
  }
  navigate() {
    this.router.navigate(['/tabs/tab2'])
  }
}
