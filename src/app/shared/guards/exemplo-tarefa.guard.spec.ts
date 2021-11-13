import { TestBed } from '@angular/core/testing';

import { ExemploTarefaGuard } from './exemplo-tarefa.guard';

describe('ExemploTarefaGuard', () => {
  let guard: ExemploTarefaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ExemploTarefaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
