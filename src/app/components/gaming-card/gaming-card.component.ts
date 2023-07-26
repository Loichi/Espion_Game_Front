import { Component, OnInit, Input } from '@angular/core';
import { Carte } from 'src/app/models/carte.model';
import { Joueur } from 'src/app/models/joueur.model';
import { GameAreaService } from '../game-area/game-area.service';

@Component({
  selector: 'app-gaming-card',
  templateUrl: './gaming-card.component.html',
  styleUrls: ['./gaming-card.component.scss'],
})
export class GamingCardComponent implements OnInit {
  constructor(public gameAreaService: GameAreaService) {}
  
  // Input property to receive the array of players with their corresponding cards
  @Input() joueursWithCards: { joueur: Joueur; carte: Carte }[] = [];
  
  currentIndex: number = 0;
  compteur: number = 0;
  isFlipped: boolean = false;
  
  flippedCardCounter: number = 0;
  
  async ngOnInit() {
    await this.delai();
  }

  // Method to toggle the flip state of the card
  toggleFlip() {
    this.isFlipped = !this.isFlipped;
    this.compteur++;

    if (this.compteur % 2 === 0) {
      this.currentIndex = (this.currentIndex + 1) % this.joueursWithCards.length;
      this.isFlipped = false;
      this.flippedCardCounter--;
    }

    if (this.flippedCardCounter == 0) {
      this.startTimer();
    }
  }

  // Method to start the timer and show the gaming card
  startTimer() {
    this.gameAreaService.setShowGamingCard('timer');
    console.log("timer en marche");
  }

  // Method to shuffle the players with cards after a delay
  async delai() {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const indices = Array.from({ length: this.joueursWithCards.length }, (_, index) => index);

    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }

    const shuffledJoueursWithCards = indices.map(index => this.joueursWithCards[index]);

    this.joueursWithCards = shuffledJoueursWithCards;

    this.flippedCardCounter = this.joueursWithCards.length;
    console.log(this.flippedCardCounter);
    console.log(this.joueursWithCards);
  }


}
