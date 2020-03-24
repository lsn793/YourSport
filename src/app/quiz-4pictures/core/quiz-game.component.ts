import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { QuizDirective } from './quiz.directive';
import { QuizItem }      from './quiz-item';
import { QuizComponent } from './quiz.component';
import { QuizLooseComponent }  from './components/loose/quiz-loose.component';

import { QuizService }    from './quiz.service';


@Component({
  selector: 'app-quiz-game',
  template: `
              <div>
                  <progress-bar-component [total_lives]=total_lives [lives]=lives [score]=score [total]=quize.length [level]=level></progress-bar-component>
                  <ng-template quiz-host></ng-template>
              </div>              
            `
})
export class QuizGameComponent implements OnInit {
  quiz_name:      string;
  quizes:         QuizItem[][];//all levels here
  quize:          QuizItem[]; //current level here
  currentIndex:   number = -1;
  score:          number = 0; //questions
  level:          number = 1;
  lives:          number = 0;
  total_lives:    number = 0;
  record:         number = 0;
  @ViewChild(QuizDirective, {static: true}) quizHost: QuizDirective;

  componentRef:   any;

  constructor(private quizService: QuizService, private componentFactoryResolver: ComponentFactoryResolver, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let path =  window.location.href;
    let search = "&theme=";
    let found = path.lastIndexOf(search);
    this.quiz_name = path.slice(found + search.length);

    switch (this.quiz_name) {
      case 'flags':
        this.quizes = this.quizService.getFlagsQuizEasy();
        break;
      case 'flags_hard':
        this.quizes = this.quizService.getFlagsQuizHard();
        break;
      default:
        this.quizes = this.quizService.getFlagsQuizEasy();
    }

    this.total_lives = this.setInitLives();

    var returnObj = JSON.parse(localStorage.getItem("4pictures_" + this.quiz_name)) //спарсим его обратно объект
    if (returnObj) { 
      if (returnObj.level && (returnObj.level <= this.quizes.length)) {
        this.level = returnObj.level;
      }
      this.record = returnObj.record ? returnObj.record : 0;
    }
    //load quiz for first level
    this.quize = (this.quizes[this.level-1]).sort(() => Math.random() - 0.5); //random sort for small arrays only
    
    this.loadComponent()
  }

  setInitLives = () => {
    this.lives = 3;
    return this.lives;
  }

  onClicked(isValidAnsver: boolean, clickedNode: HTMLDivElement, validNode: HTMLDivElement ) {
    if (this.lives <= 0 ){
      return;
    }
    //set style grid item
    clickedNode.style.backgroundColor = isValidAnsver ? 'green': 'darkred';
    
    if (isValidAnsver) {
      this.score++;
    }
    else 
    {
      this.lives--;
      if (this.lives <= 0 ){
        console.log('LOOSER. Start level again?')
        
        //set green for valid answer when you loose
        setTimeout(() => 
        {
          validNode.style.backgroundColor = 'green';
        }, 300);
        
        //this.score = 0;
        this.currentIndex = -1;
        
        //start again? load Loose Component (start animation, when animate done, load loose component)
        setTimeout(() => 
        {
          (<QuizComponent>this.componentRef.instance).animate = 'loose';
        }, 1000);
      }

      return;
    }
    
    if (this.isEndOfLevel()){          
          if (this.isEndOfGame()) {
            setTimeout(() => 
            {
              this.router.navigate(['./win'], {relativeTo: this.route, skipLocationChange: true});
            }, 1000);
            
            let localStorageObj = {
              level: 1,
              record: 0,
            };
            let localStorageSerialObj = JSON.stringify(localStorageObj);
            localStorage.setItem("4pictures_" + this.quiz_name, localStorageSerialObj);

            console.log('END.GAME. WINNER! CONGRADS!');
          }
          else {
            console.log('LOAD NEXT LEVEL')
            this.level++;

            let localStorageObj = {
              level: this.level,
              record: 0,
            };
            let localStorageSerialObj = JSON.stringify(localStorageObj);
            localStorage.setItem("4pictures_" + this.quiz_name, localStorageSerialObj);
            
            //load quiz for next level
            this.quize = (this.quizes[this.level-1]).sort(() => Math.random() - 0.5); //random sort for small arrays only
            
            //start animation and load Component after
            (<QuizComponent>this.componentRef.instance).animate = 'nextgrid';
            
            this.setInitLives(); //reset lives to initial value when new level
          }
          this.record = 0;
          this.score = 0;         
          this.currentIndex = -1;
    }
    else {
      //start animation and load Component after
      (<QuizComponent>this.componentRef.instance).animate = 'nextgrid';
    }
  }

  isEndOfGame = () => {
    return this.level + 1 > this.quizes.length;
  }

  isEndOfLevel = () => {
    return this.currentIndex + 1 >= this.quize.length;
  }

  loadComponent() {
    if (this.lives <= 0) {
      this.loadLooseComponent()
    } else {
      this.loadNextGridComponent()
    }
  }

  loadNextGridComponent() {
    if (this.level > this.quizes.length)
      this.level = 1;

    this.currentIndex = (this.currentIndex + 1) % this.quize.length;
    let quizItem = this.quize[this.currentIndex];

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(quizItem.component);
    let viewContainerRef = this.quizHost.viewContainerRef;
    viewContainerRef.clear();
    
    this.componentRef = viewContainerRef.createComponent(componentFactory);
    (<QuizComponent>this.componentRef.instance).question      = quizItem.question;
    (<QuizComponent>this.componentRef.instance).answers       = quizItem.answers;
    (<QuizComponent>this.componentRef.instance).clicked       = this.onClicked.bind(this);   
    (<QuizComponent>this.componentRef.instance).loadComponent = this.loadComponent.bind(this);   
  }

  loadLooseComponent = () => {
    if (this.record < this.score) {
      this.record = this.score;
      let localStorageObj = {
        level: this.level,
        record: this.score,
      };
      let localStorageSerialObj = JSON.stringify(localStorageObj);
      localStorage.setItem("4pictures_" + this.quiz_name, localStorageSerialObj);
    }

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(QuizLooseComponent);
    let viewContainerRef = this.quizHost.viewContainerRef;
    viewContainerRef.clear();
    
    this.componentRef = viewContainerRef.createComponent(componentFactory);
    (<QuizLooseComponent>this.componentRef.instance).question       = this.score;
    (<QuizLooseComponent>this.componentRef.instance).answers        = this.level;
    (<QuizLooseComponent>this.componentRef.instance).animate        = this.record;
    (<QuizLooseComponent>this.componentRef.instance).clicked        = this.onLooseClickedStartAgain.bind(this);   
    (<QuizLooseComponent>this.componentRef.instance).loadComponent  = this.loadComponent.bind(this);
  }

  onLooseClickedStartAgain = (level) => {
    if (level > 0)
      this.level = level;
    this.setInitLives();
    this.score = 0;
    this.quize = (this.quizes[this.level-1]).sort(() => Math.random() - 0.5);
  }
}