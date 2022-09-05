export default class Calculate {
  constructor(element, result) {
    // Cria os valores principais usados durante a classe 
    this.element = document.querySelectorAll(element);
    this.result = document.querySelector(result);
    this.n1;
    this.n2;
    this.sinal;
    this.lastSinal;
    this.resultString;
  }

  // Pega o InnerText do evento ou seja do elemento clicado 
  changeEvent() {
    this.element.forEach((item) => {
      item.addEventListener('click', (event) => {
        item.innerText = event.target.innerText;
        this.result.innerText += item.innerText;
        this.resultString = this.result.innerText;
        this.assignValues();
        this.setOperation();
      });
    });
  };

  setOperation() {
    if (this.resultString.match(/\D{2}/)) {
      // Se for digitado mais de um sinal ativa o alert para correção
      this.result.innerText = +this.n1;
      alert('Digite um número válido');
    } else if (this.resultString.match(/\D|_/g)[1]) {
      // Atribui o segundo sinal ao próximo sinal para realizar uma operação posteriormente.
      this.lastSinal = this.resultString.match(/\D|_/g)[1];
      this.lastSinal = this.lastSinal[0];

      // Realiza a operação de acordo com o sinal clicado
      this.sinal.match(/\+/) ? this.result.innerText = +this.n1 + +this.n2 + this.lastSinal : '';
      this.sinal.match(/\-/) ? this.result.innerText = +this.n1 - +this.n2 + this.lastSinal : '';
      this.sinal.match(/\*/) ? this.result.innerText = +this.n1 * +this.n2 + this.lastSinal : '';
    }
  }


  assignValues() {

    // Define result como o elemento clicado com evet.targe.innerText, pegando assim o valor de cada elemento

    // Define Resultado.innerText ao operation 

    // Atribui o primeiro valor ao n1, Atribui o primero simbolo ao sinal.

    if (this.resultString.match(/[0-9]/)) {
      this.n1 = this.resultString.match(/^[^\D]*/);
      this.n1 = this.n1[0];
      this.sinal = this.resultString.match(/\D/);
      this.sinal = this.sinal[0];
    }

    if (this.resultString.match(/\D|_/g)[0]) {
      // Atribui o valor após ao simbolo ao n2 
      this.n2 = this.resultString.match(/[\D]+\d*/);
      this.n2 = this.n2[0].replace(/\D/, '');
    }

  }

  init() {
    if (this.element && this.result) {
      this.changeEvent();
    }
    return this
  }
}
