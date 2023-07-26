import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameAreaService {
  
  // BehaviorSubject to hold the state of the gaming card content
  private showGamingCardSubject = new BehaviorSubject<string>("gaming-card");

  // Observable to subscribe to changes in the gaming card content
  showGamingCard$ = this.showGamingCardSubject.asObservable();

  // Method to update the gaming card content
  setShowGamingCard(content: string) {
    this.showGamingCardSubject.next(content);
  }
}
