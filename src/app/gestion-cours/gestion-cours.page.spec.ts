import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GestionCoursPage } from './gestion-cours.page';

describe('GestionCoursPage', () => {
  let component: GestionCoursPage;
  let fixture: ComponentFixture<GestionCoursPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionCoursPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
