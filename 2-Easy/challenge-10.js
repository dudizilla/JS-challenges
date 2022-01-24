/* Desafio nº 10
    Escreva uma função que recebe um número e retorna o seu fatorial sem utilizar nenhuma 
  estrutura de repetição (while, dowhile, for, etc)
    O fatorial de u número é igual a multiplicação de todos os inteiros positivos  menores ou iguais a ele.
    Ela deve ser capaz de retornar números inteiros corretos mesmo para valores altos.
*/

function factorial(num) {
const bigInt = BigInt(num)

  if (bigInt === 0n) {
    return 1n
  } else {
    return bigInt * factorial(bigInt - 1n)
  }
}

console.log(factorial(5)) //120
console.log(factorial(0)) //1
console.log(factorial(32)) //
console.log(factorial(9)) //362880
