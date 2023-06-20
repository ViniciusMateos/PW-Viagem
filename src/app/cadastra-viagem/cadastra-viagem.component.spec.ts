import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraViagemComponent } from './cadastra-viagem.component';

describe('CadastraViagemComponent', () => {
  let component: CadastraViagemComponent;
  let fixture: ComponentFixture<CadastraViagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastraViagemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastraViagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
