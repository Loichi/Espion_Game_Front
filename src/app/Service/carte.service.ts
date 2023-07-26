import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Carte } from "../models/carte.model";

@Injectable({
  providedIn: 'root'
})
export class CarteService {
  private apiUrl = 'http://127.0.0.1:8000/cartes';

  constructor(private http: HttpClient) { }

  // Method to fetch all cards from the API
  getCartes(): Observable<Carte[]> {
    return this.http.get<Carte[]>(this.apiUrl);
  }

  // Method to fetch a specific card by its ID from the API
  getCarteById(idCarte: string): Observable<Carte> {
    return this.http.get<Carte>(`${this.apiUrl}/${idCarte}`);
  }

  // Method to create a new card via API
  createCarte(carte: Carte): any {
    return this.http.post<Carte>(this.apiUrl, carte);
  }

  // Method to update an existing card via API
  updateCarte(carte: Carte, idCarte: string): Observable<Carte> {
    return this.http.put<Carte>(`${this.apiUrl}/${idCarte}`, carte);
  }

  // Method to delete a specific card by its ID via API
  deleteCarte(idCarte: string): any {
    return this.http.delete(`${this.apiUrl}/${idCarte}`);
  }

  // Method to delete all cards via API
  deleteAllCartes(): any {
    return this.http.delete(this.apiUrl);
  }

  // Method to fetch a list of cards based on a randomly chosen 'entrepriseDomaine' from the API
  getCardByDomaineEntreprise(): Observable<Carte[]> {
    return this.http.get<Carte[]>(`${this.apiUrl}/random/domaine-entreprise`);
  }
}
