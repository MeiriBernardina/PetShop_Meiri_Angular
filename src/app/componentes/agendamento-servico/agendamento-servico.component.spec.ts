import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamentoServicoComponent } from './agendamento-servico.component';

describe('AgendamentoServicoComponent', () => {
  let component: AgendamentoServicoComponent;
  let fixture: ComponentFixture<AgendamentoServicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendamentoServicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendamentoServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
