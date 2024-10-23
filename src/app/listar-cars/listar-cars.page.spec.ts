import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarCarsPage } from './listar-cars.page';

describe('ListarCarsPage', () => {
  let component: ListarCarsPage;
  let fixture: ComponentFixture<ListarCarsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCarsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
