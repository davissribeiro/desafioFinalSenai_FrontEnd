import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibirVinComponent } from './exibir-vin.component';

describe('ExibirVinComponent', () => {
  let component: ExibirVinComponent;
  let fixture: ComponentFixture<ExibirVinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExibirVinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExibirVinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
