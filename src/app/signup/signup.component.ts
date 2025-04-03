import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Firebase
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [RouterModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router) { }

  onSignup() {
    if (!this.email || !this.password) {
      alert("Email and password are required!");
      return;
    }

    createUserWithEmailAndPassword(auth, this.email, this.password)
      .then((userCredential) => {
        console.log("User signed up:", userCredential.user);
        alert("Account Created Successfully!");
        this.router.navigate(['/login']);
      })
      .catch((error) => {
        console.error("Firebase Error Code:", error.code);
        console.error("Firebase Error Message:", error.message);

        if (error.code === "auth/email-already-in-use") {
          alert("Account with this Email Already Exists");
          this.username = ''; // Clear the username field
          this.email = ''; // Clear the email field
          this.password = ''; // Clear the password field
        } else if (error.code === "auth/invalid-email") {
          alert("Invalid Email Format");
          this.email = ''; // Clear invalid email
        } else if (error.code === "auth/weak-password") {
          alert("Password should be at least 6 characters");
          this.password = ''; // Clear weak password
        } else {
          alert(error.message);
        }
      });
  }
}
