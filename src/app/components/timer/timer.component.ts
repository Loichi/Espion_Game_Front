// timer.component.ts

import { Component, Input, OnInit } from '@angular/core';
import { GameAreaService } from '../game-area/game-area.service';


@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  
  @Input() remainingTime: number = 60;
  interval: any;
  constructor(public gameAreaService : GameAreaService) { }

  ngOnInit(): void {
    this.startTimer();
  }

  startTimer() {
    this.interval = setInterval(() => {
      this.remainingTime--;
      if (this.remainingTime <= 0) {
        this.stopTimer();
      }
    }, 10);
  }

  stopTimer() {
    this.gameAreaService.setShowGamingCard('vote');
    clearInterval(this.interval);
  }
}
