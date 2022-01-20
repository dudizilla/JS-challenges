/* Desafio nº 4
    Escreva uma função que recebe um número inteiro qualquer, eleve ao quadrado cada 
  um de seus algarismos e depois concatene o resultado retornando um único número inteiro
*/

function squareDigits(num) {
  const str = num.toString()
  let result = ''

  for (let i = 0; i < str.length; i++) {
    result += Math.pow(Number(str[i]), 2).toString()
    
  }

  return Number(result)
}

console.log(squareDigits(3514)) //925116
console.log(squareDigits(94571)) //811625491
console.log(squareDigits(24)) //416
console.log(squareDigits(745821698)) //4916256441368164
