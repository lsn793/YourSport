import { Component, Input } from '@angular/core';
import { QuizComponent }     from '../../quiz.component';
import {
  trigger, style,
  animate, transition,
} from '@angular/animations';

@Component({
  selector: 'quiz-component',
  templateUrl: './quiz-loose.component.html',
  styleUrls: ['./quiz-loose.component.css'],
  animations: [
    trigger('FlyIn', [
      transition(':enter', [
          style({ transform: 'translateX(100%)' }),
          animate('500ms ease-out')
        ]),
    ]),
  ],

})

//aka Game Over Component
export class QuizLooseComponent implements QuizComponent {
  @Input() question:      any;
  @Input() answers:       any;
  @Input() clicked:       any;
  @Input() animate:       any; 
  @Input() loadComponent: any;
  
  constructor() {}

  ngOnInit() {
  }
  onClick(level){
    this.clicked(level);
    this.loadComponent();
  }        
}
