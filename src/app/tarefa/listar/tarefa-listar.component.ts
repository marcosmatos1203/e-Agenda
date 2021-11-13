import { Component, Inject, OnInit } from '@angular/core';
import { prioridadeType } from 'src/app/shared/enums/prioridadeEnum';
import { ITarefaService } from 'src/app/shared/interfaces/ITarefaService';
import { Tarefa } from 'src/app/shared/model/Tarefa';

@Component({
  selector: 'app-tarefa-listar',
  templateUrl: './tarefa-listar.component.html'
})
export class TarefaListarComponent implements OnInit {
  titulo: string = "Lista Tarefas";
  listaTarefas: Tarefa[] = [];
  constructor(@Inject('ITarefaServiceToken') private servico: ITarefaService) { }

  ngOnInit(): void {
    this.obterTarefas();
  }

  obterTarefas() {
    this.listaTarefas = this.servico.obterTarefas();
  }

  converterPrioridade(tipo: number): string {
    return prioridadeType[tipo];
  }

  formatarData(data: Date): string {
    return new Date(data).toLocaleDateString();
  }

}
