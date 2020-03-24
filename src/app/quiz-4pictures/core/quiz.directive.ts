import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[quiz-host]',
})
export class QuizDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
