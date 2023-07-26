import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Joueur } from "../models/joueur.model";

@Injectable({
  providedIn: 'root'
})
export class JoueurService {
  private apiUrl = 'http://127.0.0.1:8000/joueurs';

  constructor(private http: HttpClient) { }

  // Method to fetch all joueurs from the API
  getJoueurs(): Observable<Joueur[]> {
    return this.http.get<Joueur[]>(this.apiUrl);
  }

  // Method to fetch a specific joueur by their ID from the API
  getJoueurById(idJoueur: string): Observable<Joueur> {
    return this.http.get<Joueur>(`${this.apiUrl}/${idJoueur}`);
  }

  // Method to create a new joueur via API
  createJoueur(joueur: Joueur): any {
    return this.http.post<Joueur>(this.apiUrl, joueur);
  }

  // Method to update an existing joueur via API
  updateJoueur(joueur: Joueur, idJoueur: string): Observable<Joueur> {
    return this.http.put<Joueur>(`${this.apiUrl}/${idJoueur}`, joueur);
  }

  // Method to delete a specific joueur by their ID via API
  deleteJoueur(idJoueur: string): any {
    return this.http.delete(`${this.apiUrl}/${idJoueur}`);
  }

  // Method to delete all joueurs via API
  deleteAllJoueurs(): any {
    return this.http.delete(this.apiUrl);
  }
}
