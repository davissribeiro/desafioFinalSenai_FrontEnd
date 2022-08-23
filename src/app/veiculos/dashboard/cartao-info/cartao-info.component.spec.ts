import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaoInfoComponent } from './cartao-info.component';

describe('CartaoInfoComponent', () => {
  let component: CartaoInfoComponent;
  let fixture: ComponentFixture<CartaoInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartaoInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartaoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
