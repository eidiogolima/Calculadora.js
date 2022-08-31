// Calculadora, pegar numeros separar em arrays ou objetos, criar métodos de operações 

// O QUE EU PRECISO ?
// Uma calculadora que pegue dois numeros e realize uma operação com somente dois valores evitando assim bugs. Ao clicar novamente no segundo simbolo quero que ela mostre o result e o simbolo clicado esperando a ação do usuário para realizar a operação com o simbolo que ele já clicou antes,  sendo possivel fazer qualquer tipo de operação sem problemas e grandes modificações para adicionar mais de uma operação

// O QUE NÃO QUERO 
// Calcuadora que realize operação com mais de dois valores, bugs ou código muito sujo.

// Como trabalhar com os numeros ?

// Solução 1 - Amazenar em uma array após aparecer um simbolo na operação e realizar a operação após ser detectado outro simbolo 

// Probelmas-1: Ter que criar uma condicional para pegar somente a primeira operação do primeiro simbolo.

// Problemas-2: Ao criar com condicional ela irá executar a primeira condição que encontrar isso pode causar erros, deixando de executar ultimas operações que estão abaixo dos códigos passados abaixo 


// Solução 2 - Amazenar em um objeto e somar os dois após detectar outro simbolo,

// Solução 3 - Armazenar em variável n1 e n2, após armazenar realizar operação quando detectado outro sibolo na tela,

// Desafios de qualquer SOLUÇÃO Tranformar string em numeros, armazenar valores, detectar segundo simbolo, realizar a soma do primeiro simbolo.


// Método 1 - Verifica se a operação possui o sinal igual do clicado, após isso aguarda o numero para realizar a operação 
// Método 2 - Verilfica ao retorno da string inteira se possui i sinal igial da string após isso retorna a operação 

// Solução Método 1 - Observaar String a todo momento, e após clicar no simbolo ela cria o n2 e aguarda o proximo simbolo para result 
// Solução método 2 - Criar duas variáveis n1 & n2 e retornar a operação da função reqisitada em outra variável chamada resultoperation

// Resolvendo soluções após implementado a solução 2 É preciso entender que precisa de um método para criar n1 e n2 e como será feito, será básicamente a cópia de armazenar da solução 1 mas o retorno após verificar a string inteira e retornar o result após o clique no simbolo.

export default class Calculate {
  constructor(n1, n2, sinal, lastSinal) {
    // Cria os valores principais usados durante a classe 
    this.n1 = n1;
    this.n2 = n2;
    this.sinal = sinal;
    this.lastSinal = lastSinal
  }
  // Pega o um elemento HMTL
  getElement(element) {
    const elemento = document.querySelector(element);
    return elemento;
  }
  // Pega o uma nodelist HTML
  getAllElement(elementAll) {
    const elemento = document.querySelectorAll(elementAll);
    return elemento;
  }
  // Pega o InnerText do evento ou seja do elemento clicado 
  getEvent(element) {
    let result = this.getElement('.result p');
    const changeElement = (event) => {

      // Define result como o elemento clicado com evet.targe.innerText, pegando assim o valor de cada elemento
      result.innerText += event.target.innerText;

      // Define Resultado.innerText ao operation 
      const operation = result.innerText;

      // Atribui o primeiro valor ao n1, Atribui o primero simbolo ao sinal.
      if (operation.match(/[0-9]/)) {
        this.n1 = operation.match(/^[^\D]*/);
        this.n1 = this.n1[0];
        this.sinal = operation.match(/\D/);
        this.sinal = this.sinal[0];

      }

      if (operation.match(/\D|_/g)[0]) {
        // Atribui o valor após ao simbolo ao n2 
        this.n2 = operation.match(/[\D]+\d*/);
        this.n2 = this.n2[0].replace(/\D/, '');
      }

      if (operation.match(/\D{2}/)) {
        result.innerText = +this.n1;
        alert('Digite um número válido');
      } else if (operation.match(/\D|_/g)[1]) {
        // Atribui o segundo sinal ao próximo sinal para realizar uma operação posteriormente.
        this.lastSinal = operation.match(/\D|_/g)[1];
        this.lastSinal = this.lastSinal[0];

        // Realiza a operação de acordo com o sinal clicado
        this.sinal.match(/\+/) ? result.innerText = +this.n1 + +this.n2 + this.lastSinal : '';
        this.sinal.match(/\-/) ? result.innerText = +this.n1 - +this.n2 + this.lastSinal : '';
        this.sinal.match(/\*/) ? result.innerText = +this.n1 * +this.n2 + this.lastSinal : '';
      }
    };

    element.forEach((item) => {
      item.addEventListener('click', changeElement);
    });

  }

  operation() {
    const elemento = this.getAllElement('.itens-list li');
    const evento = this.getEvent(elemento);
  }

  init() {
    this.operation()
    return this
  }
}

// Lógica Final 

// Calculadora armazena os valor n1 e n2 em variáveis, analisa qual foi o simbolo clicado para realizar a operação que condiz com o simbolo que foi clicado.

// Se após digitar o valor 1 e 2 for detectado outro simbolo a calculadora detecta ele e mostra o resultado + o simbolo clicado iniciando outra operação aguardando o 2 valor pois o primeiro é o resulktado da primeira operação.

// ============== CONCLUSÃO =================

// Aprendizado: Realização de operações com string métodos e prática com regex, analises e soluções de problemas + prática melhor com classes, melhora na lógica de programação.

// Data de inicio: 16/08;
// Data de Termino: 31/08;
// Tempo em dias : 15 dias 
// Tempo para Conclusão 26 horas;
// Total de vezes Refeito do zero : 3 vezes;
// Nivel de UI|UX Design : Minimo;
// Desafio do Projeto: JS;
// Local de conclusão: Trabalho;
// Tempo do commit final -m "12:44"
