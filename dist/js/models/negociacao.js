export class Negociacao {
    #data;
    #quantidade;
    #valor;

    construtor(data,quantidade,valor){
      this.#data = data;
      this.#quantidade = quantidade;
      this.#valor = valor;  
    }
}