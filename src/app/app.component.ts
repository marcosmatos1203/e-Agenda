import { Component, Inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ITarefaService } from './shared/interfaces/ITarefaService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'e-Agenda';
  tarefaSelecionada: number;

  constructor(private servicoModal: NgbModal,
    @Inject('ITarefaServiceToken') private servico: ITarefaService) {

  }

  abrirConfirmacao(modal: any) {
    this.servicoModal.open(modal).result.then((resultado) => {
      if (resultado == 'Excluir') {
        this.servico.excluirTarefa(this.tarefaSelecionada);
      }
    }
    );
  }
}
