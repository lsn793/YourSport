import { Component, OnInit } from '@angular/core';
import { environment }          from '../../../environments/environment';


@Component({
  selector: 'app-quiz-4pictures',
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppQuizComponent implements OnInit {
  path: string = environment.basehref_assets;

  constructor() {}

  ngOnInit() {
    /*let path =  window.location.pathname;
    let found = path.lastIndexOf("/");
    this.quiz_name = path.slice(found+1);
    

    switch (this.quiz_name) {
      case 'flags':
        this.quize = this.quizService.getQuiz();
        break;
      default:
        this.quize = this.quizService.getQuiz();
    }*/
  }
}