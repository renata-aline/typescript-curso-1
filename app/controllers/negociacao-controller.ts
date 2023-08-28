export class NegociacaoController {
    private inputData;
    private inputquantidade;
    private inputValor;

    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputquantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }

    adiciona() {
        console.log(this.inputData);
        console.log(this.inputquantidade);
        console.log(this.inputValor);
    }
}