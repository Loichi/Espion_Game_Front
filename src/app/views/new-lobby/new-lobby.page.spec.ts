import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewLobbyPage } from './new-lobby.page';

describe('NewLobbyPage', () => {
  let component: NewLobbyPage;
  let fixture: ComponentFixture<NewLobbyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewLobbyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
