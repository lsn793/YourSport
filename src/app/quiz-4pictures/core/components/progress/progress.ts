import { Component, Input } from '@angular/core';

@Component({
  selector: 'progress-bar-component',
  templateUrl: './progress.html',
  styleUrls: ['./progress.css']
})

export class ProgressComponent {
  private _lives = 0;
  empty_lives: number = 0;
  @Input() score: number = 0;
  @Input() total: number = 0;
  @Input() level: number = 0;
  @Input() total_lives: number = 0;
  @Input()
  set lives(lives: number) {
    if (lives >= 0)
      this._lives = lives;
    else 
      this._lives = 0;
    
    this.empty_lives = this.total_lives-this._lives;
  }
 
  get lives(): number { return this._lives; }

}


