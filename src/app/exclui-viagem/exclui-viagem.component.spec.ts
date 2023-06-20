import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluiViagemComponent } from './exclui-viagem.component';

describe('ExcluiViagemComponent', () => {
  let component: ExcluiViagemComponent;
  let fixture: ComponentFixture<ExcluiViagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcluiViagemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcluiViagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
