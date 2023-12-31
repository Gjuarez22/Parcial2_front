import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  username: string;

  constructor() { }

  ngOnInit(): void {
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(localStorage.getItem(environment.TOKEN_NAME));
    this.username = decodedToken.name;
    let token = sessionStorage.getItem(environment.TOKEN_NAME);

  }

}
