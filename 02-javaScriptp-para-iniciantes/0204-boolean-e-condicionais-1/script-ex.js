// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

var felipe = 30,
    jessica = 33;

if (felipe > jessica){
    console.log("Maior");
} else if (felipe < jessica ){
    console.log("Menor");
} else {
    console.log("É igual")
}
   
// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao)

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; // true
var idade = 28; //true
var possuiDoutorado = false; //false
var empregoFuturo; //false
var dinheiroNaConta = 0; //false

console.log(!!nome,!!idade,!!possuiDoutorado,!!empregoFuturo,!!dinheiroNaConta);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if(brasil > china) {
    console.log('Brasil possui o numero maior de Habitantes');
} else if(brasil < china){
    console.log('China possui o numero maior de Habitantes')
} else {
    console.log('Brasil e China possui o mesmo numero de habitantes')
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}
// saida Falso

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}