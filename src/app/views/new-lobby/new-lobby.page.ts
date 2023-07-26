import { Component, OnInit } from '@angular/core';
import { JoueurController } from 'src/app/controllers/joueur.controller';
import { Joueur } from 'src/app/models/joueur.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-lobby',
  templateUrl: './new-lobby.page.html',
  styleUrls: ['./new-lobby.page.scss'],
})
export class NewLobbyPage implements OnInit {

  joueurs: Joueur[] = [];
  nomJoueur: string = '';

  constructor(private joueurController: JoueurController, private router: Router) { }


  ngOnInit() {
    this.getJoueurs();
  }

  // Method to fetch all players from the API
  async getJoueurs() {
    this.joueurController.getJoueurs().subscribe({
      next: (res) => this.joueurs = res,
      error: (err) => console.log(err),
      complete: () => console.log('completed')
    });
  }

  // Method to create a new player
  async createJoueur() {
    const formValueName = { nom: this.nomJoueur };
    this.joueurController.createJoueur(formValueName).subscribe({
      next: (res: Joueur | string) => {
        if (typeof res === 'string') {
          console.log('Erreur lors de la création du joueur:', res);
        } else {
          console.log('Nouveau joueur créé:', res);
          this.getJoueurs();
          this.nomJoueur = '';
        }
      },
      error: (err: string) => {
        console.error('Erreur lors de la création du joueur:', err);
      },
      complete: () => console.log('completed')
    });
  }

  // Method to delete a specific player
  deleteJoueur(joueur: Joueur) {
    const idJoueur: string = joueur._id!;
    console.log("id joueur : " + idJoueur);

    this.joueurController.deleteJoueur(idJoueur).subscribe({
      next: (res: any) => {
        console.log(res);
        this.joueurs = this.joueurs.filter((j) => j._id !== joueur._id);
      },
      error: (err: any) => console.log(err),
      complete: () => console.log('completed')
    });
  }

  // Method to delete all players
  deleteAllJoueurs() {
    this.joueurController.deleteAllJoueurs().subscribe({
      next: (res: any) => {
        console.log(res);
        this.joueurs = [];
      },
      error: (err: any) => console.log(err),
      complete: () => console.log('completed')
    });
  }

  // Method to start the game and navigate to the game component
  startGame() {
    localStorage.setItem('joueurs', JSON.stringify(this.joueurs));
    this.router.navigate(['game']);
  }

  // Method to navigate back to the home menu
  onArrowClick() {
    this.router.navigate(['']);
  }
}
