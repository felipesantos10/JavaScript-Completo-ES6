// BOOLEAN: Possui dois valores, False ou True

//CONDICIONAIS IF E ELSE
//Verificar se uma expressão é verdadeira com if, caso contrário o else será ativado.

var possuiGraduacao = true;

if(possuiGraduacao) {
    console.log('É VERDADEIRO');
} else {
    console.log('É FALSO');
}

//CONDICIONAIS ELSE IF
var possuiGraduacao = true;
var possuiDoutorado = false;

if(possuiGraduacao) {
    console.log('Possui Graduação mas não possui Doutorado.') 
} else if(possuiDoutorado) {
    console.log('Possui Graduação e Doutorado.')    
}else {
    console.log('Não possui graduação.')
} 
// retorna Possui Graduação, mas não possui doutorado



//TRUTHY E FALSY
//Existem valores que retornam true e outros que retornam false quando verificados em uma expressão booleana.

// Falsy
if(false)
if(0) // ou -0
if(NaN)
if(null)
if(undefined)
if('') // ou "" ou ``
//Todo o resto é truthy


//OPERADOR LÓGICO DE NEGAÇÃO !
//O operador !, nega uma operação booleana. Ou seja, !true é igual a false
// Truthy
if(!true) // false
if(!1) // false
if(!'') // true
if(!undefined) // true
if(!!' ') // true
if(!!'') // false


// OPERADORES DE COMPARAÇÃO

// Vão sempre retornar um valor booleano
10 > 5; // true
5 > 10; // false
20 < 10; // false
10 <= 10 // true
10 >= 11 // false

//O == faz uma comparação não tão estrita e o === faz uma comparação estrita, ou seja, o tipo de dado deve ser o mesmo quando usamos ===
10 == '10'; // true
10 == 10; // true
10 === '10'; // false
10 === 10 // true
10 != 15 // true
10 != '10' // false
10 !== '10' // true
