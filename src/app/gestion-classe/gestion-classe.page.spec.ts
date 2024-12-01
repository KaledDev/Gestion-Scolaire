import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GestionClassePage } from './gestion-classe.page';

describe('GestionClassePage', () => {
  let component: GestionClassePage;
  let fixture: ComponentFixture<GestionClassePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionClassePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
