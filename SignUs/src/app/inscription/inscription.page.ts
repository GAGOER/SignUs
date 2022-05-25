import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {
  adresse
  commune
  postal
  age
  email
  password
  confirmation
  firstname
  username
  token
  constructor(private router: Router) { }

  ngOnInit() {
  }
  verification() {

    if (this.password == this.confirmation) { this.register() }
    else if (this.password != this.confirmation)
      alert("le mot de passe n'est pas identique ")
  }
  register() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "firstNameUser": this.firstname,
      "username": this.username,
      "email": this.email,
      "password": this.password,
      "adresse": this.adresse,
      "age": this.age,
      "codePostal": this.postal,
      "commune": this.commune
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,

    };

    fetch("http://localhost:1337/api/auth/local/register", requestOptions)
      .then(response => response.json())
      .then((result) => {
        console.log(result)
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
