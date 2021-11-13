import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { prioridadeType } from 'src/app/shared/enums/prioridadeEnum';
import { ITarefaService } from 'src/app/shared/interfaces/ITarefaService';
import { Tarefa } from 'src/app/shared/model/Tarefa';

@Component({
  selector: 'app-tarefa-criar',
  templateUrl: './tarefa-criar.component.html'
})
export class TarefaCriarComponent implements OnInit {

  titulo: string = "Cadastrar Tarefa";
  cadastroForm: FormGroup;
  tarefa: Tarefa;

  tipos = prioridadeType;
  prioridades: any[]

  constructor(@Inject('ITarefaServiceToken') private servico: ITarefaService,private router: Router) { }

  ngOnInit(): void {

    this.prioridades = Object.keys(this.tipos).filter(t => !isNaN(Number(t)));

    this.cadastroForm = new FormGroup({
      tituloTarefa: new FormControl(''),
      percentual: new FormControl(''),
      dataCriacao: new FormControl(''),
      dataConclusao: new FormControl(''),
      prioridade: new FormControl('')
   
    })
  }
  adicionarTarefa() {

    this.tarefa = Object.assign({}, this.tarefa, this.cadastroForm.value);
    this.servico.adicionarTarefa(this.tarefa)
    this.router.navigate(['tarefa/listar']);
  }
  cancelar() {
    this.router.navigate(['tarefa/listar']);
  }
}
