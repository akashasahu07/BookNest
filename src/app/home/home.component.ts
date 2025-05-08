import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  isDarkMode = false;
  currentYear: number = new Date().getFullYear();

  constructor(private router: Router) {
    const storedTheme = localStorage.getItem('booknest-theme');
    if (storedTheme === 'dark') {
      this.isDarkMode = true;
    }
  }

  ngOnInit(): void {
    this.currentYear = new Date().getFullYear();
  }

  books = [
    {
      img: '/assets/images/atomic-habit.png',
      title: 'Atomic Habit',
      book: '/assets/pdfs/Atomic-Habits.pdf'
    },
    {
      img: '/assets/images/psy-money.png',
      title: 'The Psychology of Money',
      book: '/assets/pdfs/Psychology-of-Money.pdf'
    },
    {
      img: '/assets/images/rich-dad-poor-dad.png',
      title: 'Rich Dad Poor Dad',
      book: '/assets/pdfs/Rich-Dad-Poor-Dad.pdf'
    },
    {
      img: '/assets/images/the-subtle-art.png',
      title: 'The Subtle Art of Not Giving a F*ck',
      book: '/assets/pdfs/the-subtle-art.pdf'
    },
    {
      img: '/assets/images/wings-of-fire.png',
      title: 'Wings Of Fire by APJ Abdul Kalam',
      book: '/assets/pdfs/wings-of-fire.pdf'
    }
  ]

  onLogout() {
    signOut(auth).then(() => {
      this.router.navigate(['/login']);
    }).catch((error) => {
      console.error("Logout Error:", error);
      alert("Error logging out.");
    });
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    // Store the user's theme preference in local storage
    localStorage.setItem('booknest-theme', this.isDarkMode ? 'dark' : 'light');
  }
}