import { Injectable, inject } from '@angular/core';
import { Auth, signInWithPopup, GoogleAuthProvider, signOut, authState } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth = inject(Auth);

  // Get the currently logged-in user as an observable
  getUser(): Observable<any> {
    return authState(this.auth);
  }

  // Sign in with Google
  googleSignIn() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(this.auth, provider);
  }

  // Sign out
  logout() {
    return signOut(this.auth);
  }
}