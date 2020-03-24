import { Type } from '@angular/core';

export class QuizItem {
  constructor(public component: Type<any>, public question: any, public answers: any) {}
}