import { Component, OnInit } from '@angular/core';
import {
  trigger, state, style, animateChild,
  animate, transition, query, group,
} from '@angular/animations';

@Component({
  selector: 'app-win',
  templateUrl: './quiz-win.component.html',
  styleUrls: ['./quiz-win.component.css'],
  animations: [
    trigger('FlyIn', [
      transition(':enter', [
          style({ transform: 'translateX(100%)' }),
          animate('800ms cubic-bezier(.17,.67,.35,1.35)')
        ]),
    ]),
  ],
})

export class QuizWinComponent implements OnInit { 
  
  constructor() {}

  ngOnInit() {
  }
}