import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user$ = this.auth.user$;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
  }

  login(): void {
    this.auth.loginWithRedirect();
  }

}
