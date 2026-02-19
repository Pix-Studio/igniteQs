import { Component } from '@angular/core';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [CommonModule, AsyncPipe, JsonPipe],
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user$ = this.authService.getUser();

  constructor(private authService: AuthService) {}

  // Trigger Google Sign-In
  login() {
    this.authService.googleSignIn().then((result: any) => {
      console.log('User signed in:', result);
    }).catch((error: any) => {
      console.error('Sign-in error:', error);
    });
  }

  // Trigger Sign-Out
  logout() {
    this.authService.logout().then(() => {
      console.log('User signed out');
    }).catch((error: any) => {
      console.error('Sign-out error:', error);
    });
  }
}