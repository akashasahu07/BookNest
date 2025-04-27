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
      img: '/assets/atomic-habit.png',
      title: 'Atomic Habit'
    },
    {
      img: '/assets/psy-money.png',
      title: 'The Psychology of Money'
    }
  ]
}
