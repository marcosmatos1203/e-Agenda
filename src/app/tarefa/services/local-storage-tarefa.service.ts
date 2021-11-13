import { Injectable } from '@angular/core';
import { ITarefaService } from 'src/app/shared/interfaces/ITarefaService';
import { Tarefa } from 'src/app/shared/model/Tarefa';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageTarefaService implements ITarefaService {

  private storage: Storage;
  private key: string = "listaTarefas";
  private listaTarefas: Tarefa[];
  
  constructor() { 
    this.storage = window.localStorage;
    this.obterTarefasLocalStorage();
  }
  adicionarTarefa(tarefa: Tarefa): void {
    tarefa.id = this.obterId();
    this.listaTarefas.push(tarefa);
    this.storage.setItem(this.key, JSON.stringify(this.listaTarefas));
  }
  obterTarefas(): Tarefa[] {
    return this.listaTarefas;
  }
  obterTarefa(tarefaId: number): Tarefa {

    var tarefa: any;

    this.listaTarefas.some(function (el) {
      if (el.id == tarefaId) {
        tarefa = el;
      }
    });

    return tarefa;
  }
  atualizarTarefa(tarefa: Tarefa): void {

    this.listaTarefas.some(function (el) {
      if (el.id == tarefa.id) {
        el.prioridade = tarefa.prioridade;
        el.dataCriacao = tarefa.dataCriacao;
        el.dataConclusao = tarefa.dataConclusao;
        el.tituloTarefa = tarefa.tituloTarefa;
        el.percentual=tarefa.percentual;
      }
    });

    this.storage.setItem(this.key, JSON.stringify(this.listaTarefas));

  }

  excluirTarefa(tarefaid: number): void {
    var index: number = -1;

    this.listaTarefas.some(function (el, i) {
      if (el.id == tarefaid) {
        index = i
      }
    });

    if (index == -1) {
      console.log('Nunhuma tarefa com este id foi encontrado. Id ' + tarefaid);
    } else {
      this.listaTarefas.splice(index, 1);
      this.storage.setItem(this.key, JSON.stringify(this.listaTarefas));
    }
  }

  private obterId(): number {
    var tarefa = this.listaTarefas[this.listaTarefas.length - 1];

    if (tarefa === undefined)
      return 1;

    return tarefa.id + 1;
  }

  private obterTarefasLocalStorage() {
    var localStorageFuncionarios = this.storage.getItem(this.key)

    if (localStorageFuncionarios) {
      this.listaTarefas = JSON.parse(localStorageFuncionarios);
    }
    else {
      this.listaTarefas = [];
    }
  }
}
