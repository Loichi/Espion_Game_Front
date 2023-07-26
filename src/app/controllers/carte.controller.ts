

import { Observable } from "rxjs";
import { CarteService } from "../Service/carte.service";
import { Carte } from "../models/carte.model";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })

export class CarteController {


    constructor(private CarteService: CarteService){}

    getCardByDomaineEntreprise(): Observable<Carte[]>{

        return this.CarteService.getCardByDomaineEntreprise();
    }
    
    

   


}