// FUNÇÕES
//Bloco de código que pode ser executado e reutilizado. Valores podem ser passados por uma função e a mesma retorna outro valor.

// Area do Quadrado
function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado(12));

// Pi
function pi() {
  return 3.14;
}

var total = 5 * pi();

console.log(total);

//PARÂMETROS E ARGUMENTOS

function imc(peso, altura) {
  var imc = peso / altura ** 2;
  return imc;
}
console.log(imc(91, 1.76));

// PARÊNTESES EXECUTA A FUNÇÃO
function corFavorita(cor) {
  switch (cor) {
    case "Azul":
      return "O mar é Azul";
    case "Verde":
      return "As folhas são verdes";
    case "Vermelho":
      return "O sangue é vermelho";
    default:
      return "Não encontrei em minha base de dados";
  }
}

console.log(corFavorita("Azul"));

// ARGUMENTOS PODEM SER FUNÇÕES

addEventListener('click', function() {
  console.log("oi");
});
