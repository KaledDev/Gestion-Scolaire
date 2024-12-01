import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GestionEnseignantsPage } from './gestion-enseignants.page';

describe('GestionEnseignantsPage', () => {
  let component: GestionEnseignantsPage;
  let fixture: ComponentFixture<GestionEnseignantsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionEnseignantsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
