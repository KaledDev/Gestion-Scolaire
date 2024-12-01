import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GestionSallesPage } from './gestion-salles.page';

describe('GestionSallesPage', () => {
  let component: GestionSallesPage;
  let fixture: ComponentFixture<GestionSallesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionSallesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
