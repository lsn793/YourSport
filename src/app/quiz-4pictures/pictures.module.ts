import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PicturesRoutingModule }  from './pictures-routing.module';
import { AppQuizComponent }       from './core/app-quiz.component';
import { QuizLooseComponent }     from './core/components/loose/quiz-loose.component';
import { QuizWinComponent }       from './core/components/win/quiz-win.component';
import { GridComponent }          from './core/components/grid/grid'
import { ProgressComponent}       from './core/components/progress/progress';
import { QuizGameComponent }      from './core/quiz-game.component';
import { QuizDirective }          from './core/quiz.directive';
import { QuizService }            from './core/quiz.service';



@NgModule({
  imports: [
    CommonModule,
    PicturesRoutingModule
  ],
  providers: [QuizService],
  declarations: [ AppQuizComponent,
                  QuizGameComponent,
                  QuizLooseComponent,
                  QuizWinComponent,
                  GridComponent,
                  ProgressComponent,
                  QuizDirective ],
  entryComponents: [ GridComponent, QuizLooseComponent ],
})
export class PicturesModule { }
