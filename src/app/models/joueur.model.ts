export class Joueur {
    _id?: string;
    nom: string;
    estEspion?: boolean;
    score?: number;
  
    constructor(_id: string, nom: string, estEspion: boolean, score: number) {
      this._id = _id;
      this.nom = nom;
      this.estEspion = estEspion;
      this.score = score;
    }

  }
  