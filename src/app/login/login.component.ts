import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Firebase
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = "";
  password: string = "";

  constructor(private router: Router) { }

  onLogin() {

    signInWithEmailAndPassword(auth, this.email, this.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...

        alert('Valid Account, you are dedirected to Home Page..');
        this.router.navigate(['/home']); // Navigate to the Home Page
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        alert('Wrong Email or Password..');
        this.email = "";
        this.password = "";
      });

  }
}
