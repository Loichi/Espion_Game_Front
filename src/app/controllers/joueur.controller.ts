import { Observable } from "rxjs";
import { JoueurService } from "../Service/joueur.service";
import { Joueur } from "../models/joueur.model";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class JoueurController {

  // Array to hold player objects
  joueurs: Joueur[] = [];

  constructor(private joueurService: JoueurService) { }

  // Method to fetch all players from the service via the API
  getJoueurs(): Observable<Joueur[]> {
    return this.joueurService.getJoueurs();
  }

  // Method to create a new player and add it via the API
  createJoueur(formValueName: any): any {
    if (formValueName.nom.trim() !== '') {
      const newJoueur: Joueur = {
        nom: formValueName.nom,
      };
      return this.joueurService.createJoueur(newJoueur);
    } else {
      return new Observable<string>((observer) => {
        observer.next('Entrer un nom de joueur');
        observer.complete();
      });
    }
  }

  // Method to update an existing player via the API
  updateJoueur(joueur: Joueur): any {
    const newJoueur: Joueur = {
      nom: joueur.nom,
      score: joueur.score,
      estEspion: joueur.estEspion
    };
    return this.joueurService.updateJoueur(newJoueur, joueur._id!);
  }

  // Method to set a player as the spy (estEspion = true) via the API
  setEspionJoueur(joueur: Joueur): any {
    const newJoueur: Joueur = {
      nom: joueur.nom,
      score: joueur.score,
      estEspion: true
    };
    return this.joueurService.updateJoueur(newJoueur, joueur._id!);
  }

  // Method to reset 'estEspion' attribute of a player to false via the API
  resetEstEspionJoueur(joueur: Joueur): any {
    const newJoueur: Joueur = {
      nom: joueur.nom,
      score: joueur.score,
      estEspion: false
    };
    return this.joueurService.updateJoueur(newJoueur, joueur._id!);
  }

  // Method to delete a specific player by their ID via the API
  deleteJoueur(idJoueur: string): any {
    return this.joueurService.deleteJoueur(idJoueur);
  }

  // Method to delete all players via the API
  deleteAllJoueurs(): any {
    return this.joueurService.deleteAllJoueurs();
  }
}
