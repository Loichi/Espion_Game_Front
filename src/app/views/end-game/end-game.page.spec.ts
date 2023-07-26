import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EndGamePage } from './end-game.page';

describe('EndGamePage', () => {
  let component: EndGamePage;
  let fixture: ComponentFixture<EndGamePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EndGamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
