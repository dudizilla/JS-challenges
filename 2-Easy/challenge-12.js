/* Desafio nº 12
    Escreva uma função que receba um valor inteiro e retorne a quantidade de cada moeda
  para se chegar ao valor.
    Deve-se sempre priorizar as moedas de maior valor (o máximo possível de moedas de 500,
  depois o máximo possível de moedas de 100, etc)
*/

function creditCoins(num) {
  const coins = {
    '500': 0,
    '100': 0,
    '25': 0,
    '10': 0,
    '5': 0,
    '1': 0,
  }

  let rest = num

  coins['500'] = Math.floor(rest / 500)
  rest -= 500 * Math.floor(rest / 500)

  coins['100'] = Math.floor(rest / 100)
  rest -= 100 * Math.floor(rest / 100)

  coins['25'] = Math.floor(rest / 25)
  rest -= 25 * Math.floor(rest / 25)

  coins['10'] = Math.floor(rest / 10)
  rest -= 10 * Math.floor(rest / 10)

  coins['5'] = Math.floor(rest / 5)
  rest -= 5 * Math.floor(rest / 5)

  coins['1'] = Math.floor(rest / 1)
  rest -= 1 * Math.floor(rest / 1)

  return coins
}

console.log(creditCoins(478))
console.log(creditCoins(384))
console.log(creditCoins(5412))
console.log(creditCoins(50))
