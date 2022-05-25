import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-afaire',
  templateUrl: './afaire.page.html',
  styleUrls: ['./afaire.page.scss'],
})
export class AfairePage implements OnInit {
  statut
  img

  etats
  constructor() {
    this.getList()
  }

  ngOnInit() {
  }
  getList() {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjYsImlhdCI6MTY1MjkwMDc0NSwiZXhwIjoxNjU1NDkyNzQ1fQ.-8tONTHp5-MJt3OvDRry4KtRUXvMiQ6_aC2Amg-q8Bk");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,

    };

    fetch("http://localhost:1337/api/list-signalements?populate=etat", requestOptions)
      .then(response => response.json())
      .then((result) => {
        this.etats = result?.data
        console.log(result)
      })
      .catch(error => console.log('error', error));
  }
}