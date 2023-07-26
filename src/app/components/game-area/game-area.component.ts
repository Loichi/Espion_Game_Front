import { Component, OnInit, Input } from '@angular/core';
import { Carte } from 'src/app/models/carte.model';
import { Joueur } from 'src/app/models/joueur.model';
import { GameAreaService } from './game-area.service';
import { Router } from '@angular/router';
import { JoueurController } from 'src/app/controllers/joueur.controller';

@Component({
  selector: 'app-game-area',
  templateUrl: './game-area.component.html',
  styleUrls: ['./game-area.component.scss'],
})
export class GameAreaComponent implements OnInit {

  // Input property to receive the array of players with their corresponding cards
  @Input() joueursWithCards: { joueur: Joueur; carte: Carte }[] = [];

  joueurSelectionne: Joueur | null = null;

  constructor(
    public gameAreaService: GameAreaService,
    private router: Router,
    private joueurController: JoueurController
  ) { }


  ngOnInit() {

  }

  // Method to validate the vote and display the result
  validerVote() {
    if (this.joueurSelectionne) {
      if (this.joueurSelectionne.estEspion === true) {
        this.gameAreaService.setShowGamingCard("espion-win");
        this.resetEstEspion();
      } else {
        this.gameAreaService.setShowGamingCard("espion-lose");
        this.resetEstEspion();
      }
    } else {
      console.log('Aucun joueur sélectionné.');
    }
  }

  // Method to navigate to the home menu and reset the gaming card content
  goHomeMenu() {
    this.gameAreaService.setShowGamingCard("gaming-card");
    this.router.navigate(['']);
  }

  // Method to reset 'estEspion' attribute of all players
  resetEstEspion() {
    this.joueursWithCards.forEach(element => {
      this.joueurController.resetEstEspionJoueur(element.joueur).subscribe({
        next: (res: any) => console.log(res),
        error: (err: any) => console.log(err),
        complete: () => console.log('completed')
      });
    });
  }
}
