import { Joueur } from "./joueur.model";

export class Salon {
    _id: string;
    joueurs: Array<Joueur>;
   
  
    constructor(_id: string, joueurs: Array<Joueur>) {
      this._id = _id;
      this.joueurs = joueurs;
     
    }

  }
  