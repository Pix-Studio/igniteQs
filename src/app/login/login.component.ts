import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user$ = this.authService.getUser();

  constructor(private authService: AuthService) {}

  // Trigger Google Sign-In
  login() {
    this.authService.googleSignIn().then((result) => {
      console.log('User signed in:', result);
    }).catch((error) => {
      console.error('Sign-in error:', error);
    });
  }

  // Trigger Sign-Out
  logout() {
    this.authService.signOut().then(() => {
      console.log('User signed out');
    }).catch((error) => {
      console.error('Sign-out error:', error);
    });
  }
}