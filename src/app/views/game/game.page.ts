import { Component, OnInit } from '@angular/core';
import { CarteController } from 'src/app/controllers/carte.controller';
import { JoueurController } from 'src/app/controllers/joueur.controller';
import { Carte } from 'src/app/models/carte.model';
import { Joueur } from 'src/app/models/joueur.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {

  // Array to hold joueur objects
  joueurs: Joueur[] = [];

  // Array to store randomly selected cards
  randomCards: Carte[] = [];

  // Variable to hold the joueur acting as the spy
  espion: Joueur | null = null;

  // Array to store joueurs with their corresponding cards
  joueursWithCards: { joueur: Joueur, carte: Carte }[] = [];

  // Flag to determine if joueur cards are shown
  areCardsShown: boolean = false;

  constructor(private carteController: CarteController, private joueurController: JoueurController) { }


  async ngOnInit() {
    try {
      this.recupDataFromLocalStorage();
      await this.resetEstEspion();
      await this.setNewEspion();
      await this.getCardByDomaineEntreprise();
    } catch (error) {
      console.error(error);
    }
  }

  // Method to retrieve 'joueurs' data from local storage and assign it to the 'joueurs' variable
  recupDataFromLocalStorage() {
    const joueursData = localStorage.getItem('joueurs');
    if (joueursData) {
      this.joueurs = JSON.parse(joueursData);
    }
  }

  // Method to update all joueurs' 'estEspion' attribute to false
  async resetEstEspion() {
    this.joueurs.forEach((joueur) => {
      this.joueurController.updateJoueur(joueur).subscribe({
        next: (res: any) => res,
        error: (error: any) => console.log(error)
      });
    });
  }

  // Method to randomly choose a joueur and set their 'estEspion' attribute to true, designating them as the spy
  async setNewEspion() {
    if (this.joueurs.length > 0) {
      const randomIndex = Math.floor(Math.random() * this.joueurs.length);
      const randomJoueur: Joueur = this.joueurs[randomIndex];
      this.joueurController.setEspionJoueur(randomJoueur).subscribe({
        next: (res: any) => {
          this.espion = res;
          this.getJoueurs();
        },
        error: (err: any) => {
          console.log(err);
        }
      });
    }
  }

  // Method to fetch the list of joueurs from the database, updating the 'joueurs' array with the latest attributes
  async getJoueurs() {
    this.joueurController.getJoueurs().subscribe({
      next: (res) => {
        this.joueurs = res;
        this.attributionDesCartes();
      },
      error: (err) => console.log(err)
    });
  }

  // Method to fetch a list of cards based on a randomly chosen 'entrepriseDomaine' from the database
  async getCardByDomaineEntreprise() {
    return new Promise<void>((resolve, reject) => {
      this.carteController.getCardByDomaineEntreprise().subscribe({
        next: (res) => {
          this.randomCards = res;
          resolve();
        },
        error: (err) => {
          console.log(err);
          reject(err);
        }
      });
    });
  }

  // Method to distribute a random card to each joueur who is not the spy and a special 'espion' card to the spy
  async attributionDesCartes() {
    // Filter joueurs based on their 'estEspion' attribute
    const nonEspionJoueurs = this.joueurs.filter((joueur) => !joueur.estEspion);
    const espionJoueurs = this.joueurs.filter((joueur) => joueur.estEspion);

    // Assign a random card to each non-spy joueur
    for (const joueur of nonEspionJoueurs) {
      const randomIndex = Math.floor(Math.random() * this.randomCards.length);
      const carte = this.randomCards[randomIndex];
      this.joueursWithCards.push({ joueur, carte });
      this.randomCards.splice(randomIndex, 1);
    }

    // Assign the 'espion' card to the spy joueur if there is one
    if (espionJoueurs.length > 0) {
      const spyCard: Carte = {
        domaineEntreprise: "Vous êtes l'espion",
        poste: "Vous devez ne pas vous faire prendre",
      };
      for (const espion of espionJoueurs) {
        this.joueursWithCards.push({ joueur: espion, carte: spyCard });
      }
    }
  }

  // Method to trigger when all joueur cards are shown
  onAllCardsShown() {
    this.areCardsShown = true;
  }

  // Method to refresh all data and variables
  refreshAll() {
    this.joueurs = [];
    this.randomCards = [];
    this.espion = null;
    this.joueursWithCards = [];
    this.areCardsShown = false;
  }
}