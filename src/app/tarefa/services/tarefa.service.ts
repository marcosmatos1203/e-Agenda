import { Injectable } from '@angular/core';
import { ITarefaService } from 'src/app/shared/interfaces/ITarefaService';
import { Tarefa } from 'src/app/shared/model/Tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefaService implements ITarefaService{

  constructor() { }
  adicionarTarefa(tarefa: Tarefa): void {
    console.log(tarefa);
    }
  obterTarefa(tarefaId: number): Tarefa {
    var tarefa = new Tarefa(1, 'Marcos', 1, new Date('2013/5/9'), 0, new Date('2013/5/9'));
    return tarefa;
  }
  atualizarTarefa(tarefa: Tarefa): void {
    console.log(Tarefa);
  }
  obterTarefas(): Tarefa[] {
    

    var listaTarefas: Tarefa[] = [];

    listaTarefas.push(new Tarefa(1, 'Ramon', 1, new Date('2013/5/9'), 0, new Date('2013/5/9')));
    listaTarefas.push(new Tarefa(1, 'Alexandre', 1, new Date('2013/5/9'), 0, new Date('2013/5/9')));
    listaTarefas.push(new Tarefa(1, 'Marcia', 1, new Date('2013/5/9'), 0, new Date('2013/5/9')));
    listaTarefas.push(new Tarefa(1, 'Maria', 1, new Date('2013/5/9'), 0, new Date('2013/5/9')));
    listaTarefas.push(new Tarefa(1, 'João', 1, new Date('2013/5/9'), 0, new Date('2013/5/9')));

    return listaTarefas;
  }
  excluirTarefa(tarefaId: number): void {
    throw new Error('Method not implemented.');
  }
}
