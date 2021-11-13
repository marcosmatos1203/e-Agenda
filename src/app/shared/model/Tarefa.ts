export class Tarefa {
    id: number;
    tituloTarefa: string = '';
    prioridade: number;
    dataCriacao: Date;
    percentual: number;
    dataConclusao: Date;
    constructor(id: number,tituloTarefa: string, prioridade: number,dataCriacao: Date,percentual: number,dataConclusao: Date) {
        this.id = id;
        this.tituloTarefa = tituloTarefa;
        this.prioridade = prioridade;
        this.dataCriacao = dataCriacao;
        this.percentual = percentual;
        this.dataConclusao = dataConclusao;
    }
}