import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
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
      img: '/assets/images/atomic-habit.png',
      title: 'Grow More'
    }
  ]
}

// time 48
