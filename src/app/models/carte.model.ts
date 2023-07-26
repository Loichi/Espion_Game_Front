
export class Carte {
    _id?: string;
    domaineEntreprise:string;
    poste:string;
   
  
    constructor(_id: string, domaineEntreprise: string , poste: string) {
      this._id = _id;
      this.domaineEntreprise = domaineEntreprise;
      this.poste = poste;
     
    }

  }
  