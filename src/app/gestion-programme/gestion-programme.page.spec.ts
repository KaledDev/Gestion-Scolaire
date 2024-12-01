import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GestionProgrammePage } from './gestion-programme.page';

describe('GestionProgrammePage', () => {
  let component: GestionProgrammePage;
  let fixture: ComponentFixture<GestionProgrammePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionProgrammePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
