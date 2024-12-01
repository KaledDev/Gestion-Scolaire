import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccueilEnseignantPage } from './accueil-enseignant.page';

describe('AccueilEnseignantPage', () => {
  let component: AccueilEnseignantPage;
  let fixture: ComponentFixture<AccueilEnseignantPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilEnseignantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
