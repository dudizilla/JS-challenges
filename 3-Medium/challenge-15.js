/* Desafio nº 15
    Escreva uma função que recebe uma string de algarismos romanos e seja capaz de traduzir seu
  conteúdo retornando o inteiro decimal correspondente.
*/

function romanNumeral(str) {
  const numeralsArray = str.split('')
  
  const decimalsArrays = numeralsArray.map(numeral => {
    switch (numeral) {
      case 'I':
        return 1
      case 'V': 
        return 5
      case 'X':
        return 10
      case 'L': 
        return 50
      case 'C':
        return 100
      case 'D':
        return 500
      case 'M':
        return 1000
      default:
        return 0
    }
  })

  return decimalsArrays.reduceRight((accum, current, index, array) => {
    if (current < array[index + 1]) {
      return accum - current
    } else {
      return accum + current
    }
  })
}

console.log(romanNumeral('XLVII')) //47
console.log(romanNumeral('CDXXXVIII')) //438
console.log(romanNumeral('CMIX')) //909
console.log(romanNumeral('MMMCMXCIX')) //3999
